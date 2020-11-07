import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { Proveedor } from 'src/app/models/proveedor';
import {Vehiculo} from 'src/app/models/vehiculo';
import {ProveedorService} from '../../services/proveedor.service';
import {VehiculoService} from '../../services/vehiculo.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {FirebaseServicioService} from '../../services/firebase-servicio.service';
import { Observable } from 'rxjs';
import { error } from 'console';

@Component({
  selector: 'app-formproveedor',
  templateUrl: './formproveedor.component.html',
  styleUrls: ['./formproveedor.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class FormproveedorComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  porcentaje: Observable<number>;
  url:Observable<string>;
  proSave:any=[];
  proveedor:Proveedor={
    ciDriver:'',
    emailDriver:'',
    nameDriver:'',
    lnameDriver:'',
    birthdateDriver:'',
    sexDriver:'',
    addressDriver:'',
    phoneDriver:'',
    cipictureDriver:'',
    licenceDriver:'',
    rateDriver:0,
    stateDriver:true,
    activeDriver:true,
    userDriver:'',
    companyDriver:''
  };

  vehiculo:Vehiculo={
    idVehicle:'',
    plateVehicle:'',
    brandVehicle:'',
    modelVehicle:'',
    yearVehicle:'',
    colorVehicle:'',
    registrationVehicle:'',
    plpictureVehicle:'',
    pictureVehicle:'',
    typeServiceVehicle:'1',
    typeVehicle:'',
    userVehicle:'',
  }

  constructor(
    private _formBuilder: FormBuilder,
    private proveedorServicio: ProveedorService,
    private vehiculoServicio:VehiculoService,
    private firebaseServicio:FirebaseServicioService,
    private storage: AngularFireStorage
   ) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      email:[Validators.required, Validators.minLength(5)],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  guardarProveedor(){
    console.log(this.proveedor);
    console.log(this.vehiculo);
    this.firebaseServicio.SignUp(this.proveedor.emailDriver,'adwri545')
    .then((value)=>{
      console.log("valor"+value);
      this.firebaseServicio.sendPasswordResetEmail(this.proveedor.emailDriver)
      .then(()=>{
        this.proveedorServicio.saveProveedor(this.proveedor).subscribe(
          res=>{
            console.log(res);
            this.proSave=res;
            this.vehiculo.userVehicle=this.proSave.idDriver;
            this.vehiculoServicio.guardarVehiculo(this.vehiculo).subscribe(
            res=>{
              console.log(res);
            },
            err=>{
              console.log(err);
            }
          )
        },
          err=>{console.log(err)});
        alert("Proveedor agregado");
        console.log("proveedor agregado");
      })
    })
   /* this.proveedorServicio.saveProveedor(this.proveedor).subscribe(
      res=>{
        console.log(res);
        this.proSave=res;
        this.vehiculo.userVehicle=this.proSave.idDriver;
        this.vehiculoServicio.guardarVehiculo(this.vehiculo).subscribe(
        res=>{
          console.log(res);
        },
        err=>{
          console.log(err);
        }
      )
    },
      err=>{console.log(err)});
    alert("Proveedor agregado");*/
    .catch((e)=>{
      alert(e);  
    })
}

  async uploadCedula(e)  {
  //  console.log('subir',e.target.files[0]);
    const file=e.target.files[0];
    const filePath=`proveedores/cedula_${e.target.files[0].name}`;
    const ref=this.storage.ref(filePath);
    const task=this.storage.upload(filePath,file);
    (await task).ref.getDownloadURL().then(url=>{this.proveedor.cipictureDriver=url});
  }

  async uploadLicencia(e)  {
    //console.log('subir',e.target.files[0]);
    const file=e.target.files[0];
    const filePath=`proveedores/licencia_${e.target.files[0].name}`;
    const ref=this.storage.ref(filePath);
    const task=this.storage.upload(filePath,file);
    (await task).ref.getDownloadURL().then(url=>{this.proveedor.licenceDriver=url});
  }

  async uploadPlaca(e)  {
    //console.log('subir',e.target.files[0]);
    const file=e.target.files[0];
    const filePath=`vehiculo/placa_${e.target.files[0].name}`;
    const ref=this.storage.ref(filePath);
    const task=this.storage.upload(filePath,file);
    (await task).ref.getDownloadURL().then(url=>{this.vehiculo.plpictureVehicle=url});
  }
  async uploadMatricula(e)  {
   // console.log('subir',e.target.files[0]);
    const file=e.target.files[0];
    const filePath=`vehiculo/matricula_${e.target.files[0].name}`;
    const ref=this.storage.ref(filePath);
    const task=this.storage.upload(filePath,file);
    (await task).ref.getDownloadURL().then(url=>{this.vehiculo.registrationVehicle=url});
  }
  async uploadVehiculo(e)  {
   // console.log('subir',e.target.files[0]);
    const file=e.target.files[0];
    const filePath=`vehiculo/vehiculo_${e.target.files[0].name}`;
    const ref=this.storage.ref(filePath);
    const task=this.storage.upload(filePath,file);
    (await task).ref.getDownloadURL().then(url=>{this.vehiculo.pictureVehicle=url});
  }

}

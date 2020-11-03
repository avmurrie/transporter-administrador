import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { Proveedor } from 'src/app/models/proveedor';
import {Vehiculo} from 'src/app/models/vehiculo';
import {ProveedorService} from '../../services/proveedor.service';
import {AngularFireStorage} from '@angular/fire/storage';
import { Observable } from 'rxjs';

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
  proveedor:Proveedor={
    cedula:'',
    correo:'',
    nameDriver:'',
    LnameDriver:'',
    fechaNacimiento:'',
    sexo:'',
    telefono:'',
    cedulaFoto:'',
    licienciaFoto:'',
    estado:true,
  };

  vehiculo:Vehiculo={
    cedula:'',
    placa:'',
    modelo:'',
    anio:'',
    color:'',
    matriculaFoto:'',
    servicio:'',
    tipoVehiculo:'',
  }

  constructor(
    private _formBuilder: FormBuilder,
    private proveedorServicio: ProveedorService,
    private storage: AngularFireStorage
   ) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  guardarProveedor(){
    console.log(this.proveedor);
    console.log(this.vehiculo);
    alert("Proveedor agregado");
    //ENVIA LOS DATOS DEL NUEVO PROVEEDOR AL BACKEND ACTUALMENTE GENERA ERROR PORQUE NO TIENE CONEXION
    //CON EL RESTAPI
    /*this.proveedorServicio.saveProveedor(this.proveedor).subscribe(
      res=>{console.log(res)},
      err=>{console.log(err)}
    )*/
  }

  async uploadCedula(e)  {
    console.log('subir',e.target.files[0]);
    const file=e.target.files[0];
    const filePath=`proveedores/cedula_${e.target.files[0].name}`;
    const ref=this.storage.ref(filePath);
    const task=this.storage.upload(filePath,file);
    (await task).ref.getDownloadURL().then(url=>{this.proveedor.cedulaFoto=url});
  }

  async uploadLicencia(e)  {
    console.log('subir',e.target.files[0]);
    const file=e.target.files[0];
    const filePath=`proveedores/licencia_${e.target.files[0].name}`;
    const ref=this.storage.ref(filePath);
    const task=this.storage.upload(filePath,file);
    (await task).ref.getDownloadURL().then(url=>{this.proveedor.licienciaFoto=url});
  }

  async uploadPlaca(e)  {
    console.log('subir',e.target.files[0]);
    const file=e.target.files[0];
    const filePath=`vehiculo/placa_${e.target.files[0].name}`;
    const ref=this.storage.ref(filePath);
    const task=this.storage.upload(filePath,file);
    (await task).ref.getDownloadURL().then(url=>{this.vehiculo.placaFoto=url});
  }
  async uploadMatricula(e)  {
    console.log('subir',e.target.files[0]);
    const file=e.target.files[0];
    const filePath=`vehiculo/matricula_${e.target.files[0].name}`;
    const ref=this.storage.ref(filePath);
    const task=this.storage.upload(filePath,file);
    (await task).ref.getDownloadURL().then(url=>{this.vehiculo.matriculaFoto=url});
  }
  async uploadVehiculo(e)  {
    console.log('subir',e.target.files[0]);
    const file=e.target.files[0];
    const filePath=`vehiculo/vehiculo_${e.target.files[0].name}`;
    const ref=this.storage.ref(filePath);
    const task=this.storage.upload(filePath,file);
    (await task).ref.getDownloadURL().then(url=>{this.vehiculo.vehiculoFoto=url});
  }


}

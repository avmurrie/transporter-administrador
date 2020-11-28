import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmpresaService} from '../../services/empresa.service';
import {Tarifa} from '../../models/empresa';


@Component({
  selector: 'app-formtarifas',
  templateUrl: './formtarifas.component.html',
  styleUrls: ['./formtarifas.component.css']
})
export class FormtarifasComponent implements OnInit {
  firstFormGroup: FormGroup;
  servicios:any=[];
  tarifa:Tarifa={
    nameFare:'',
    idTypeServiceFare:'',
    minFare:'',
    maxFare:'',
    priceFare:'',
    idCompanyFare:''
  }

  constructor(
    private _formBuilder: FormBuilder,
    private empresaService:EmpresaService
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.obtenerServicios();
  }
//      yearVehicle:['',[Validators.required, Validators.pattern( /^[1-2][0-9]{3}$/)]],

  private buildForm(){
    this.firstFormGroup = this._formBuilder.group({
      nameFare: ['',Validators.required],
      idTypeServiceFare: ['',Validators.required],
      minFare:['',Validators.required],
      maxFare:['',Validators.required],
      priceFare:['',Validators.required],
      idCompanyFare:1
    });
  };

  save(event: Event) {
    event.preventDefault();
    if(this.firstFormGroup.valid){
      this.tarifa=this.firstFormGroup.value;
      console.log(this.tarifa);
      this.empresaService.createTarifa(this.tarifa)
        .subscribe(
          value=>
          {console.log("valor"+ value);
          alert("Tarifa agregado");
          });
    }
  }

  obtenerServicios(){
    this.empresaService.getServicios().subscribe(
      res=>{this.servicios=res},
        err=>console.log(err)
      )
  }

}

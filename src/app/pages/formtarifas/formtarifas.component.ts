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
  tarifa:Tarifa={
    nombre:'',
    servicio:'',
    minKM:'',
    maxKM:'',
    precio:''
  }

  constructor(
    private _formBuilder: FormBuilder,
    private empresaService:EmpresaService
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(){
    this.firstFormGroup = this._formBuilder.group({
      nombre: ['',Validators.required],
      servicio: ['',Validators.required],
      minKM:['',Validators.required],
      maxKM:['',Validators.required],
      precio:['',Validators.required],
    });
  };

  save(event: Event) {
    event.preventDefault();
    if(this.firstFormGroup.valid){
      this.tarifa=this.firstFormGroup.value;
      console.log(this.tarifa);
      /*this.empresaService.createTarifa(this.tarifa)
        .subscribe(
          value=>
          {console.log("valor"+ value);
          alert("Tarifa agregado");
          });*/
    }
  }

}

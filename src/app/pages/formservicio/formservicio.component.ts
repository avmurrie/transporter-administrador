import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmpresaService} from '../../services/empresa.service';
import {Servicio} from '../../models/empresa';
import value from '*.json';

@Component({
  selector: 'app-formservicio',
  templateUrl: './formservicio.component.html',
  styleUrls: ['./formservicio.component.css']
})
export class FormservicioComponent implements OnInit {
  firstFormGroup: FormGroup;
  servicio:Servicio={
    nombre:'',
    descripcion:''
  }

  constructor(
    private _formBuilder: FormBuilder,
    private empresaService:EmpresaService
  ) {
   }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(){
    this.firstFormGroup = this._formBuilder.group({
      nombre: ['',Validators.required],
      descripcion: ['',Validators.required]
    });
  };

  save(event: Event) {
    event.preventDefault();
    if(this.firstFormGroup.valid){
      this.servicio=this.firstFormGroup.value;
      console.log(this.servicio);
     /* this.empresaService.createServicio(this.servicio)
        .subscribe(
          value=>
          {console.log("valor"+ value);
          alert("Servicio agregado");
          });*/
    }
  }



}

import { Component, OnInit } from '@angular/core';
import {EmpresaService} from '../../services/empresa.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {
  politica:any=[];
  edit:any=[];
  constructor(
    private empresaServicio:EmpresaService
  ) { }

  ngOnInit(): void {
    this.cargarPolitica();
  }

  cargarPolitica(){
    this.empresaServicio.getPolitica().subscribe(
      res=>{this.politica=res;
      },
      err=>{console.log(err)}
    );
  }

  editarPolitica(){
    this.empresaServicio.getPolitica().subscribe(
      res=>{
          this.edit=res;
          this.edit.descriptionPolice=this.politica.descriptionPolice;
          this.empresaServicio.editPolitica(this.edit).subscribe(
          res=>{console.log(res);
            alert("Política editada");
          this.cargarPolitica()},
          err=>{console.log(err)}
        )
      },
      err=>{
        console.log(err);
      }
    )
  }


}

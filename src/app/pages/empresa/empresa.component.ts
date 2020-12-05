import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogConfig } from '@angular/material/dialog';
import {FormservicioComponent} from '../formservicio/formservicio.component';
import {FormeditservicioComponent} from '../formeditservicio/formeditservicio.component';
import {FormtarifasComponent} from '../formtarifas/formtarifas.component';
import {FormedittarifaComponent} from '../formedittarifa/formedittarifa.component';
import {EmpresaService} from '../../services/empresa.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {
  politica:any=[];
  edit:any=[];
  servicios:any=[];
  servicio:any=[];
  tarifas:any=[];
  tarifa:any=[];
  filtroServicio='';
  filtroTarifa='';
  typeService:any=[];

  constructor(
    private empresaServicio:EmpresaService,
    private dialog: MatDialog,

  ) { }

  ngOnInit(): void {
    this.cargarPolitica();
    this.obtenerServicios();
    this.obtenerTarifas();
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

  obtenerServicios(){
    this.empresaServicio.getServicios().subscribe(
      res=>{this.servicios=res},
        err=>console.log(err)
      )
  }

  eliminarServicio(id:string){
    this.empresaServicio.deleteServicio(id).subscribe(
      res=>{
        this.obtenerServicios();
      },
      err=>console.log(err)
    );
  }

  openFormServicio() {
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=false;
    dialogConfig.autoFocus=true;
    dialogConfig.width='35%';
    const dialogRef =  this.dialog.open(FormservicioComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.obtenerServicios();
    });
  }

  editarFormServicio(servicio:any) {
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=false;
    dialogConfig.autoFocus=true;
    dialogConfig.height='91%';
    dialogConfig.width='50%';
    const dialogRef =  this.dialog.open(FormeditservicioComponent,
      {
        width:'35%',
        data:{
          id:servicio.idTypeService,
          nameTypeService:servicio.nameTypeService,
          descriptionTypeService:servicio.descriptionTypeService
        }
      }
    );
    dialogRef.afterClosed().subscribe(result => {
      this.obtenerServicios();
    });
  }

   openFormTarifa(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=false;
    dialogConfig.autoFocus=true;
    dialogConfig.width='50%';
    const dialogRef =  this.dialog.open(FormtarifasComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.obtenerTarifas();
    });
  }

  obtenerTarifas(){
    this.empresaServicio.getTarifas().subscribe(
      res=>{this.tarifas=res},
        err=>console.log(err)
      )
  }

  eliminarTarifa(id:string){
    this.empresaServicio.deleteTarifa(id).subscribe(
      res=>{
        this.obtenerTarifas();
      },
      err=>console.log(err)
    );
  }

  editarFormTarifa(tarifa:any) {
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=false;
    dialogConfig.autoFocus=true;
    dialogConfig.height='91%';
    const dialogRef =  this.dialog.open(FormedittarifaComponent,
      {
        width:'50%',
        data:{
          id:tarifa.idFare,
          nameFare:tarifa.nameFare,
          minFare:tarifa.minFare,
          maxFare:tarifa.maxFare,
          priceFare:tarifa.priceFare,
          idServicio:tarifa.idTypeServiceFare
        }
      }
    );
    dialogRef.afterClosed().subscribe(result => {
      this.obtenerTarifas();
    });
  }

  obtenerServicio(id:string){
    this.typeService(id);
    console.log("este es el servicio "+this.typeService);
  }

}

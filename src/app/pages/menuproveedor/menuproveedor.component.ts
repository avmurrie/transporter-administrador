import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {MatDialog,MatDialogConfig } from '@angular/material/dialog';
import {FormproveedorComponent} from '../formproveedor/formproveedor.component';
import {ProveedorService} from '../../services/proveedor.service';

@Component({
  selector: 'app-menuproveedor',
  templateUrl: './menuproveedor.component.html',
  styleUrls: ['./menuproveedor.component.css']
})
export class MenuproveedorComponent implements OnInit {
  color: ThemePalette = 'primary';
  proveedores:any=[]; //ARREGLO DE PROVEEDORES, ESTA SE COMUNICA CON EL HTML
  proveedor:any=[];
  isChecked = true;

  constructor(
    private dialog: MatDialog,
    private proveedorServicio:ProveedorService
  ) { }

  ngOnInit(): void {
    this.obtenerProveedores();
   
  }
  
  openDialog() {
    console.log('se abre el form dialog');
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=false;
    dialogConfig.autoFocus=true;
    dialogConfig.height='95%';
    dialogConfig.width='60%'
    const dialogRef =  this.dialog.open(FormproveedorComponent, dialogConfig);
  }

  obtenerProveedores(){
        //ESTE METODO SE DEBE LLAMAR SIEMPRE QUE SE REALICE ALGUN CAMBIO DE LA DATA DEL PROVEEDOR
    //Y SE LA QUIERE VER REFLEJADA EN PANTALLA SIN NECESIDAD DE TENER QUE REFRESCAR EL NAVEGADOR
   // LLAMAR AL BACKEND PARA QUE ENVIE LA LISTA DE LOS PROVEEDORES
    this.proveedorServicio.getProveedores().subscribe(
      res=>{this.proveedores=res},
      err=>console.log(err)
    )
  }

  cambiar(id:string,event:boolean){
    console.log("cambio"+id+" el evento es "+event);
    this.proveedorServicio.editEstadoProveedor(id,this.proveedor);
  }

}

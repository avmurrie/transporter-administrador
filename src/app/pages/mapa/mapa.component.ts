import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { InfCarreraComponent } from 'src/app/modals/inf-carrera/inf-carrera.component';
import { PoliticasComponent } from 'src/app/modals/politicas/politicas.component';


//declare var google;
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  map = null;
  usuarios:any[] = [];
  lat: number = -2.2058400;
  lng: number = -79.9079500;
  usuario_seleccionado:any = {};
  
  siguiendo:boolean = false;
  iconMap={
    iconUrl:"assets/iconos/camionetaicon2.png",
    iconHeight:10
  }

  constructor(private dialog: MatDialog, 
              db: AngularFireDatabase) {
    
    db.list('/usuarios').valueChanges()
    .subscribe( (usuarios: any) => {
       console.log(usuarios);
      this.usuarios = usuarios;
      
        // si estoy siguiendo a alguien
        for(let usuario of usuarios) {
          this.lat = usuario.lat;
          this.lng = usuario.lng;
          //this.seguir_usuario(usuario);
          console.log(usuario);
        /*if ( usuario.nombre === this.usuario_seleccionado.nombre ) {
          this.lat = usuario.lat;
          console.log(this.lat);
          this.lng = usuario.lng;
          console.log(this.lng);
        }*/
      }
     
    } );
   }

  ngOnInit(): void {
    //this.loadMap();
  }

  ngOnDestroy(){
    this.map=null;
  }
  
  

 /* async loadMap() {
   
    const mapEle: HTMLElement = document.getElementById('map');
    this.map = new google.maps.Map(mapEle, {
      //center: myLatLng,
      zoom: 17,
      zoomControl:false,
      mapTypeControl:false,
      streetViewControl:false,
      fullscreenControl:false
    });
    google.maps.event
    .addListenerOnce(this.map, 'idle', () => {
      
    })
  }*/

  
  seguir_usuario( usuario: any ) {
    console.log ( usuario );
    this.siguiendo = true;
    this.lat = usuario.lat;
    this.lng = usuario.lng;
    
  }


  dejar_seguir() {
    this.siguiendo = false;
    this.usuario_seleccionado = {};
  }

  openDialogServicio(usuario: any){
    
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=false;
    dialogConfig.autoFocus=true;
    dialogConfig.width='60%';
    dialogConfig.data={
      email: usuario.email
    }
    //dialogConfig.height='80%';
    
    const dialogRef=this.dialog.open(InfCarreraComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
  );    
    
  }

}

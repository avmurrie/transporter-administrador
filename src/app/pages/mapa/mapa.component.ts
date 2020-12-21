import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';



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
  usuario_seleccionado:any = {}
  siguiendo:boolean = false;

  constructor(db: AngularFirestore) {
    
    db.collection('/usuarios').valueChanges()
    .subscribe( (usuarios: any) => {
       console.log(usuarios);
      this.usuarios = usuarios;
      if ( this.siguiendo ) {
        // si estoy siguiendo a alguien
        for(let usuario of usuarios) {
        if ( usuario.nombre === this.usuario_seleccionado.nombre ) {
          this.lat = usuario.lat;
          console.log(this.lat);
          this.lng = usuario.lng;
          console.log(this.lng);
        }
      }
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
    this.usuario_seleccionado = usuario;
  }


  dejar_seguir() {
    this.siguiendo = false;
    this.usuario_seleccionado = {};
  }

}

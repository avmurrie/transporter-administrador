import { Component, OnInit, Inject } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-inf-carrera',
  templateUrl: './inf-carrera.component.html',
  styleUrls: ['./inf-carrera.component.css']
})
export class InfCarreraComponent implements OnInit {
  usuarios:any[] = [];
  inicio:string;
  fin:string;
  hora:string;
  precio:Number;
  metodoPago:string;
  email:string;


  constructor(db: AngularFireDatabase,
    private dialogRef: MatDialogRef<InfCarreraComponent>,
    @Inject(MAT_DIALOG_DATA) data) { 
      this.email=data.email;

    db.list('/usuarios').valueChanges()
    .subscribe( (usuarios: any) => {
       console.log("usuariossss",usuarios);
      this.usuarios = usuarios;
      // si estoy siguiendo a alguien
        for(let usuario of usuarios) {
          if (this.email=usuario.email){
            this.inicio=usuario.inicio;
            this.fin=usuario.fin;
            this.hora=usuario.hora;
            this.precio=usuario.valor;
            this.metodoPago=usuario.metodoPago;
          }
         

        
        }      
      
      });
  }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }
}

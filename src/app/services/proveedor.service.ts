import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Proveedor} from '../models/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
/*  API_URI='http://ApiPROVEEDOR';*/
    API_URI='https://ctvehicular.pythonanywhere.com/api/';
  constructor(
    private http:HttpClient
  ) { }


  //METODO PARA PEDIR AL BACKEND TODOS LOS PROVEEDORES REGISTRDOS
  getProveedores(){
    return this.http.get(`${this.API_URI}/driver/`);
  }

  //METODO PARA PEDIR AL BACKEND SOLO UN PROVEEDOR REGISTRADO
  getProveedor(id:String){
    return this.http.get(`${this.API_URI}/getProveedor/${id}`);
  }

  //METODO PARA ENVIAR UN PROVEEDOR AL BACKEND Y REGISTRARLO
  saveProveedor(proveedor: Proveedor){
    return this.http.put(`${this.API_URI}/proveedor`,proveedor);
  }

  //METODO PARA EDITAR EL ESTADO HABILITADO/INHABILITADO DE UN PROVEEDOR AL BACKEND Y REGISTRARLO
  editEstadoProveedor(id:string,estadoEditado:string){
    console.log(estadoEditado);
    return this.http.post(`${this.API_URI}/driver/${id}`,estadoEditado);
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Empresa} from '../models/empresa';
@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  API_URI='https://ctvehicular.pythonanywhere.com/api';

  constructor(
    private http:HttpClient
  ) { }

  //METODO PARA PEDIR AL BACKEND LA POLITICA DE LA EMPRESA
  getPolitica(){
    const id=2;
    return this.http.get(`${this.API_URI}/police/${id}/`);
  }

   //METODO PARA EDITAR LA POLITICA DE LA EMPRESA
  editPolitica(politicaEditada:any){
    const id=2;
    return this.http.put(`${this.API_URI}/police/${id}/`,politicaEditada);
  }

  //METODOS PARA LAS TARIFAS DE LA EMPRESA
  getTarifas(){
    return this.http.get(`${this.API_URI}/fare/`);
  }

  getTarifa(id:number){
    return this.http.get(`${this.API_URI}/fare/${id}/`);
  }

  createTarifa(tarifa:any){
    return this.http.post(`${this.API_URI}/fare/`,tarifa);
  }

  editTarifa(tarifa:any, id:number){
    return this.http.put(`${this.API_URI}/fare/${id}/`,tarifa);
  }

  deleteTarifa(id:number){
    return this.http.delete(`${this.API_URI}/fare/${id}/`);
  }

  //METODOS PARA LAS SERVICIO DE LA EMPRESA
  getServicios(){
    return this.http.get(`${this.API_URI}/typeService/`);
  }

  getServicio(id:number){
    return this.http.get(`${this.API_URI}/typeService/${id}/`);
  }

  createServicio(servicio:any){
    return this.http.post(`${this.API_URI}/typeService/`,servicio);
  }

  editServicio(servicio:any, id:number){
    return this.http.put(`${this.API_URI}/typeService/${id}/`,servicio);
  }

  deleteServicio(id:number){
    return this.http.delete(`${this.API_URI}/typeService/${id}/`);
  }

}

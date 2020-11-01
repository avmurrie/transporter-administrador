import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Empresa} from '../models/empresa';
@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  API_URI='http://ApiEMPRESA';

  constructor(
    private http:HttpClient
  ) { }

  //METODO PARA PEDIR AL BACKEND LA POLITICA DE LA EMPRESA
  getPolitica(){
    return this.http.get(`${this.API_URI}/getPolitica`);
  }

   //METODO PARA EDITAR LA POLITICA DE LA EMPRESA
  editPolitica(id:string,politicaEditada:Empresa){
    return this.http.put(`${this.API_URI}/empresa/${id}`,politicaEditada);
  }
}

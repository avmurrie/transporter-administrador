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
}

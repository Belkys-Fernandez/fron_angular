import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';



@Injectable({
  providedIn: 'root'
})
export class ApiHelperService {
  ingresar(usuario: Usuario) {
    throw new Error('Method not implemented.');
  }
 
 
  Api: string;
  
  constructor(private http:HttpClient ) { 
    this.Api = 'https://miproyecto-backend.herokuapp.com/';
  }

  loguear(usuario:Usuario): Observable<Usuario[]>{
    return <Observable<Usuario[]>>(this.http.post( this.Api + 'Usuario/loguear',JSON.stringify(usuario)));
  }

  registrar(usuario:Usuario): Observable<Usuario[]>{
    return <Observable<Usuario[]>>(this.http.post( this.Api + 'Usuario/crear',JSON.stringify(usuario)));
  }

  traerUsuarios(id:number, token:string){
    
    return <Observable<Usuario[]>>(this.http.post( this.Api + 'Usuario/traerTodos/'+id,JSON.stringify({token:token})));
  }

  
}


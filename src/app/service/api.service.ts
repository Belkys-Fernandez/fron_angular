import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {
   }




  RegistrarUsuario(nombre: string, usuario:string,  passsword: number, ) {
    const body = { nombre, usuario, passsword};
    return this.http.post('https://miproyecto-backend.herokuapp.com/Usuarios/registrarUsuario', body);
  }

  BuscarUsuario(usuario: string, password: string) {
    const body = {usuario, password};
    return this.http.post('https://miproyecto-backend.herokuapp.com/Usuarios/buscarUsuario', body);
  }

  traerValoresPost(): Observable<any> {
    //Post                      .toPromise()
    return this.http.post('', {});
  }
}

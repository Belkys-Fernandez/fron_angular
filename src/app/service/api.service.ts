import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {

   }


  RegistrarUsuario(nombre: string, categoria:string,  precio: number, presentacion:string) {
    const body = { nombre, categoria, precio, presentacion};
    return this.http.post('https://miproyecto-backend.herokuapp.com/Usuarios/registrarUsuario', body);
  }

  BuscarUsuario(correo: string, contraseña: string) {
    const body = {correo, contraseña};
    return this.http.post('https://miproyecto-backend.herokuapp.com/Usuarios/buscarUsuario', body);
  }

  traerValoresPost(): Observable<any> {
    //Post                      .toPromise()
    return this.http.post('', {});
  }
}

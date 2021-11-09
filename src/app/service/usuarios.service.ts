import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  listUsuario: Usuario[] = [

 //   {usuario: "Jfernandez" , nombre: 'Flor', apellido: "Fernandez", sexo: 'F'}
  ];
 
  constructor() { }

  private usuario!: Usuario;

getUsuario(){
  return this.listUsuario.slice();
}
setUsuario(usuario:Usuario){
  this.usuario= usuario;
}
 eliminarUsuario(index: number ){
  this.listUsuario.splice(index, 1 );
 } 
 agregarUsuario( usuario: Usuario){
   this.listUsuario.unshift( usuario);
 }


}

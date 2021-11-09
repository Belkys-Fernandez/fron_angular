import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  listUsuario: Usuario[] = [

    //{id: "01", usuario: "Jfernandez" , nombre: 'Flor', apellido: "Fernandez", sexo: 'F' , token:'false'}
  ];

  


  constructor() { }
  private usuario!: Usuario;

  setUsuario(usuario:Usuario){
    this.usuario=usuario;
  }
  getUsuarios(){
    return this.usuario;
  }


  getUsuario(){
    return this.listUsuario.slice();
  }
  eliminarUsuario(index: number ){
    this.listUsuario.splice(index, 1 );
  } 
  agregarUsuario( usuario: Usuario){
    this.listUsuario.unshift( usuario);
  }


}

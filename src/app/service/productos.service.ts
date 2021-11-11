import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  listproducto: producto[] = [
    {nombre: 'Biocros', categoria: 'Energizante', precio: 1.079, presentacion: 'Botella'},
    {nombre: 'Thermogenes', categoria: 'Quemador de grasa', precio: 1.559, presentacion: 'Caja'},
    {nombre: 'Biocros', categoria: 'Energizante', precio: 1.079, presentacion: 'Botella'},
    {nombre: 'cafezzino', categoria: 'Quemador de grasa', precio: 1.559, presentacion: 'Caja'},
    {nombre: 'Power', categoria: 'Energizante', precio: 1.079, presentacion: 'Caja'},
    {nombre: 'Aqtua', categoria: 'Energizante', precio: 1.079, presentacion: 'Botella'},
    {nombre: 'Biocros', categoria: 'Energizante', precio: 1.079, presentacion: 'Botella'},
    {nombre: 'Biocros', categoria: 'Energizante', precio: 1.079, presentacion: 'caja'},
  
  ];
  Api: string;

  constructor(private http:HttpClient ) { 
    
    this.Api = 'https://miproyecto-backend.herokuapp.com/';
  }
<<<<<<< HEAD
   private producto!:producto;

   
   traerValor() {
    
    return this.http.get('https://miproyecto-backend.herokuapp.com/Productos/listaProducto');
  }
  RegistrarProducto(nombre: string, categoria:string,  precio: number, presentacion:string) {
    const body = { nombre, categoria, precio, presentacion};
    return this.http.post('https://miproyecto-backend.herokuapp.com/Producto/registrarProducto', body);
  }
 
  eliminarProducto(nombre:string) {
    const body = {nombre};
    return this.http.post('https://miproyecto-backend.herokuapp.com/Usuarios/buscarProducto', body);
  }
=======
  private producto!:producto;

  registrar(productos:producto): Observable<producto[]>{
    return <Observable<producto[]>>(this.http.post( this.Api + 'listaProductos/crear',JSON.stringify(productos)));
  }
  
  traerproductoss(id:number, token:string){
    
    return <Observable<producto[]>>(this.http.post( this.Api + 'productos/traerTodos/'+id,JSON.stringify({token:token})));
  }
  
>>>>>>> f2e70590906da28b13baedf9c2066418f98368e4

  RegistrarUsuario(usuario: string, nombre: string, apellido: string, sexo:string ) {
    const body = { usuario,nombre,apellido,sexo};
    return this.http.post('https://miproyecto-backend.herokuapp.com/Usuarios/registrarUsuario', body);
  }

<<<<<<< HEAD
  BuscarUsuario(correo: string, contraseña: string) {
    const body = {correo, contraseña};
    return this.http.post('https://miproyecto-backend.herokuapp.com/Usuarios/buscarUsuario', body);
  }

  traerValoresPost(): Observable<any> {
    //Post .toPromise()
    return this.http.post('', {});
  }

=======
>>>>>>> f2e70590906da28b13baedf9c2066418f98368e4
  getProducto(){
  return this.listproducto.slice();
  }
 
  setProducto(producto: producto){
  this.producto=producto;
  }
<<<<<<< HEAD


 
  agreggarProducto(producto:producto){
    this.listproducto.unshift(producto);
  }
  
=======


  eliminarProducto(index:number){
    this.listproducto.splice(index ,1);
  }
  agreggarProducto(producto:producto){
    this.listproducto.unshift(producto);
  }
}

>>>>>>> f2e70590906da28b13baedf9c2066418f98368e4

  






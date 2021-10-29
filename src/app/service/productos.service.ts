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
  private producto!:producto;

  registrar(productos:producto): Observable<producto[]>{
    return <Observable<producto[]>>(this.http.post( this.Api + 'listaProductos/crear',JSON.stringify(productos)));
  }
  
  traerproductoss(id:number, token:string){
    
    return <Observable<producto[]>>(this.http.post( this.Api + 'productos/traerTodos/'+id,JSON.stringify({token:token})));
  }
  


  getProducto(){
  return this.listproducto.slice();
  }
 
  setProducto(producto: producto){
  this.producto=producto;
  }


  eliminarProducto(index:number){
    this.listproducto.splice(index ,1);
  }
  agreggarProducto(producto:producto){
    this.listproducto.unshift(producto);
  }
}


  





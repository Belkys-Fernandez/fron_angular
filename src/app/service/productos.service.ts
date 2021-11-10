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

   
   traerValor() {
 
    return this.http.get('https://miproyecto-backend.herokuapp.com/Productos/listaProducto');
  }
  RegistrarProducto(nombre: string, categoria:string,  precio: number, presentacion:string) {
    const body = { nombre, categoria, precio, presentacion};
    return this.http.post('https://miproyecto-backend.herokuapp.com/Producto/registrarProducto', body);
  }
 
  eliminarProducto(index:Number) {
    const body = { index};
    return this.http.post('https://miproyecto-backend.herokuapp.com/Usuarios/buscarProducto', body);
  }

  
  traerValoresPost(): Observable<any> {
    //Post                      .toPromise()
    return this.http.post('', {});
  }

  getProducto(){
  return this.listproducto.slice();
  }
 
  setProducto(producto: producto){
  this.producto=producto;
  }


 
  agreggarProducto(producto:producto){
    this.listproducto.unshift(producto);
  }
}





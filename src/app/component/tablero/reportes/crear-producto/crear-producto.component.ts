import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { producto } from 'src/app/interfaces/producto';
import { Usuario } from 'src/app/interfaces/usuario';
import { ProductoService } from 'src/app/service/productos.service';


@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  presentacion:any[]=['Botella', 'Caja'] 
  form:FormGroup;

    constructor( private fb: FormBuilder, private api:ProductoService, private _productoService:ProductoService, private router:Router,private _snackBar: MatSnackBar) { 

  this.form =this.fb.group({
    nombre:['',Validators.required],
    categoria:['',Validators.required],
    precio:['',Validators.required],
    presentacion:['',Validators.required],

    
    })

  }
 @Input()producto!:producto;
  ngOnInit(): void {
  }
 
  AgregarProducto(){
    let prod :producto[]= localStorage.getItem("carrito")?JSON.parse(localStorage.getItem("carrito")??""):[];
    prod.push(this.producto);
    localStorage.setItem("carrito",JSON.stringify(prod));
    console.log(prod);
    this.api.agreggarProducto(this.producto);
    this.router.navigate(['/tablero/reportes']);

    this._snackBar.open('El producto fue agregado con exito','',  {
      duration:2000,
      horizontalPosition:'center',
      verticalPosition:'top'

    })

  }


  /*agregarproducto(){
    

    const prod:producto={
      nombre:this.form.value.nombre,
      categoria:this.form.value.categoria,
      precio:this.form.value.precio,
      presentacion:this.form.value.presentacion,

    }
   
    this._productoService.agregarProducto(prod);
    this.router.navigate(['/tablero/reportes'])

    this._snackBar.open('El producto fue agregado con exito','',  {
      duration:2000,
      horizontalPosition:'center',
      verticalPosition:'top'

    })

  }*/


  

}
function prod(prod: any) {
  throw new Error('Function not implemented.');
}


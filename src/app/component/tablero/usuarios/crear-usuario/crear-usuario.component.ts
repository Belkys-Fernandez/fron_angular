import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
<<<<<<< HEAD
import { ApiService } from 'src/app/service/api.service';
import { UsuarioService } from 'src/app/service/usuarios.service';
=======
import { ApiHelperService } from 'src/app/service/api-helper.service';
import { UsuarioService } from 'src/app/service/usuarios-helper.service';

>>>>>>> f2e70590906da28b13baedf9c2066418f98368e4


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
 sexo:any[]=['Cliente Admirable', 'Empresario']

 public usuarioActual!:Usuario;
 public usuarios!:Usuario[];
 nuevo:boolean;


 setearUsuario(usuarioSeleccionada:Usuario){
  this.usuarioActual = usuarioSeleccionada;
  } 

 form: FormGroup;
  api: any;

<<<<<<< HEAD
  constructor(private fb:FormBuilder, private _usuarioService:UsuarioService, api:ApiService,
=======
  constructor(private fb:FormBuilder, private api:ApiHelperService , public user:UsuarioService,
>>>>>>> f2e70590906da28b13baedf9c2066418f98368e4
     private router:Router, private _snackBar: MatSnackBar) {
       this.nuevo=false;
      //this.api.traerUsuarios(this.user.getUsuario().id , this.user.getUsuario().token).subscribe(then =>this.usuarios =then);
      

    this.form= this.fb.group({
      usuario:['', Validators.required, Validators.minLength(8), Validators.maxLength(15)],
      nombre:['', Validators.required ,Validators.minLength(3), Validators.maxLength(15)],
      apellido:['', Validators.required, Validators.minLength(3)],
      sexo:['', Validators.required],
    })
  }


  ngOnInit(): void {
  }
<<<<<<< HEAD
  registrar(){
    alert('Creación de Usuario');
  }

  

  agregarUsuario(){
    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);
    this.api.RegistrarUsuario(
      this.form.value.nombre,
      this.form.value.categoria,
      this.form.value.precio,
      this.form.value.presentacion).subscribe((resp: any) => {
        console.log(resp);
        alert("Usuario Creado con exito");
        this.router.navigate(['./tablero/usuario'])
      });
  

  
  
    
=======
  agregarNuevo(){
    this.nuevo= true;
  }

  agregarUsuario(){

   
  
    this.api.registrar(this.usuarioActual);
    this.router.navigate([ './tablero/usuario'])
>>>>>>> f2e70590906da28b13baedf9c2066418f98368e4

    this._snackBar.open('Usuario fue agregado con exito','',  {
      duration:3000,
      horizontalPosition:'center',
      verticalPosition:'top'
  
    })
  }

}
function id(id: any) {
  throw new Error('Function not implemented.');
}


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { ApiService } from 'src/app/service/api.service';
import { UsuarioService } from 'src/app/service/usuarios.service';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
 sexo:any[]=['Cliente Admirable', 'Empresario']
 
 form: FormGroup;
  api: any;

  constructor(private fb:FormBuilder, private _usuarioService:UsuarioService, api:ApiService,
     private router:Router, private _snackBar: MatSnackBar) {

    this.form= this.fb.group({
      usuario:['', Validators.required, Validators.minLength(8), Validators.maxLength(15)],
      nombre:['', Validators.required ,Validators.minLength(3), Validators.maxLength(15)],
      apellido:['', Validators.required, Validators.minLength(3)],
      sexo:['', Validators.required],
    })
   }

  ngOnInit(): void {
  }
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
  

  
  
    

    this._snackBar.open('Usuario fue agregado con exito','',  {
      duration:3000,
      horizontalPosition:'center',
      verticalPosition:'top'
  
    })
  }

}

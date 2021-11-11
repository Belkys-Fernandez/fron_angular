import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  form!:FormGroup;
  private _snackBar: any;
  cargaSpinner=true ;

  constructor(private api:ApiService, private router: Router, private fb:FormBuilder) {
    this.form = this.fb.group({
      nombre: ["",[Validators.required, Validators.minLength(7), Validators.maxLength(9)]],
      usuario: ["",[Validators.required, Validators.minLength(4), Validators.maxLength(24)]],
      password: ["",[Validators.required, Validators.minLength(4), Validators.maxLength(24)]],
  
    });
  }




  ngOnInit(): void {
  }
  registrar(){
    alert('Creación de Usuario');
  }

  atras(){
    this.router.navigate(['/login']);
  }

  CrearUsuario(): void{
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    this.api.RegistrarUsuario(
      this.form.value.nombre,
      this.form.value.apellido,
   
      this.form.value.password).subscribe(resp => {
        console.log(resp);
        alert("Usuario Creado con exito");
      });
  }
  error(){
    this._snackBar.open('Usuario o contraseña  ingresado son invalido','',  {
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'top'

    })
  }
  fakecarga(){
    this.cargaSpinner=true;
    setTimeout(()=> {
      //redireccionamos
      this.router.navigate(['tablero']);
      this.cargaSpinner=false;
    }, 10);
  }

}

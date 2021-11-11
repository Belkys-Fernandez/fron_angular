import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  //guardar
  usu!:any;
  cont!:any;

  cargaSpinner=true ;

  constructor(private api:ApiService,  private fb:FormBuilder, private _snackBar: MatSnackBar,private router:Router) {
   if(sessionStorage.getItem('token')=='valido'){
     this.router.navigate(['tablero']);
   }


    this.form= this.fb.group({
      usuario:['',Validators.required ,Validators.minLength(3),Validators.maxLength(20)],
      passwork:['',Validators.required,Validators.minLength(3),Validators.maxLength(20)]
    })
   }

  ngOnInit(): void {
  }
  entrar(){
    sessionStorage.setItem('Token', 'valido');
    this.router.navigate(['tablero']);
  }
  salir(){
    sessionStorage.removeItem('token');
  }
  registro(){
    this.router.navigate(['registro']);
  }
  ingresarR(){
    if(this.form.validator){
      return;
    }
    console.log(this.form.value);
    this.api.BuscarUsuario(
      this.form.value.usuario,
      this.form.value.passwork).subscribe(resp=>{
        console.log(resp);
        this.entrar();
        this.load(this.form.value.usuario, this.form.value.passwork)
      })

  }
  load(usu:any, passwork:any){
this.usu= localStorage.getItem(usu);
this.cont= localStorage.getItem(passwork);
  }

   
  ingresar(){
    const usuario=this.form.value.usuario;
    const passwork=this.form.value.passwork ;
  
    if (usuario=='belkys' && passwork== '123') {
      this.fakecarga();
    

    }else{
      this.error(); 
      this.form.reset();
    }

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
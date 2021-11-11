import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { ApiService } from 'src/app/service/api.service';
=======
import { Usuario } from 'src/app/interfaces/usuario';
import { ApiHelperService } from 'src/app/service/api-helper.service';
import { UsuarioService } from 'src/app/service/usuarios.service';
>>>>>>> f2e70590906da28b13baedf9c2066418f98368e4



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

<<<<<<< HEAD
  constructor(private api:ApiService,  private fb:FormBuilder, private _snackBar: MatSnackBar,private router:Router) {
   if(sessionStorage.getItem('token')=='valido'){
     this.router.navigate(['tablero']);
   }


=======
  usuario!:  Usuario;
  nuevo!: boolean;


  constructor(private fb:FormBuilder, private api:ApiHelperService, private user:UsuarioService,   private _snackBar: MatSnackBar,private router:Router) {
   // this.usuario= new usuario();
    this.nuevo = false;
    
>>>>>>> f2e70590906da28b13baedf9c2066418f98368e4
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

   
  loguear() {
    this.api.loguear(this.usuario).subscribe(then => { this.logueo(then); }, err => alert(err.Message));
  }

  logueo(resp: Usuario[]) {
    if (resp.length == 0) 
      alert("usuario invalido");
     else {
      this.user.setUsuario(resp[0]);
      this.router.navigateByUrl('tablero');
    }
  }

 ingresar() {
    this.api.registrar(this.usuario).subscribe(then => { this.logueo(then); }, err => alert(err.Message));
  }

  /*ingresar(){
    const usuario=this.form.value.usuario;
    const passwork=this.form.value.passwork ;
  
    if (usuario=='belkys' && passwork== '123') {
      this.fakecarga();
    

    }else{
      this.error(); 
      this.form.reset();
    }

  }*/
  /*error(){
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
  }*/
  
}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { ApiHelperService } from 'src/app/service/api-helper.service';
import { UsuarioService } from 'src/app/service/usuarios.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  cargaSpinner=true ;

  usuario!:  Usuario;
  nuevo!: boolean;


  constructor(private fb:FormBuilder, private api:ApiHelperService, private user:UsuarioService,   private _snackBar: MatSnackBar,private router:Router) {
   // this.usuario= new usuario();
    this.nuevo = false;
    
    this.form= this.fb.group({
      usuario:['',Validators.required],
      passwork:['',Validators.required]
    })
   }

  ngOnInit(): void {
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
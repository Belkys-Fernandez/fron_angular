import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { ApiHelperService } from 'src/app/service/api-helper.service';
import { UsuarioService } from 'src/app/service/usuarios-helper.service';



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

  constructor(private fb:FormBuilder, private api:ApiHelperService , public user:UsuarioService,
     private router:Router, private _snackBar: MatSnackBar) {
       this.nuevo=false;
      //this.api.traerUsuarios(this.user.getUsuario().id , this.user.getUsuario().token).subscribe(then =>this.usuarios =then);
      

    this.form= this.fb.group({
      usuario:['', Validators.required],
      nombre:['', Validators.required],
      apellido:['', Validators.required],
      sexo:['', Validators.required],
    })
  }


  ngOnInit(): void {
  }
  agregarNuevo(){
    this.nuevo= true;
  }

  agregarUsuario(){

   
  
    this.api.registrar(this.usuarioActual);
    this.router.navigate([ './tablero/usuario'])

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


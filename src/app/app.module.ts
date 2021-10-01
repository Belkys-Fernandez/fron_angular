import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompartirModuloModule } from './component/compartModulos/compartir-modulo.module';




import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CompartirModuloModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { producto } from 'src/app/interfaces/producto';

 

const listproducto: producto[] = [
  {nombre: 'Biocros', categoria: 'Energizante', precio: 1.079, presentacion: 'Botella'},
  {nombre: 'Thermogenes', categoria: 'Quemador de grasa', precio: 1.559, presentacion: 'Caja'},
  {nombre: 'Biocros', categoria: 'Energizante', precio: 1.079, presentacion: 'Botella'},
  {nombre: 'cafezzino', categoria: 'Quemador de grasa', precio: 1.559, presentacion: 'Caja'},
  {nombre: 'Power', categoria: 'Energizante', precio: 1.079, presentacion: 'Caja'},
  {nombre: 'Aqtua', categoria: 'Energizante', precio: 1.079, presentacion: 'Botella'},
  {nombre: 'Biocros', categoria: 'Energizante', precio: 1.079, presentacion: 'Botella'},
  {nombre: 'Biocros', categoria: 'Energizante', precio: 1.079, presentacion: 'caja'},

];



@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'categoria', 'precio', 'presentacion'];
  dataSource =listproducto;

  constructor() { }

  ngOnInit(): void {
  }

}

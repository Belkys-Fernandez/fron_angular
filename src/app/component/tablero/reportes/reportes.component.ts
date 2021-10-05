import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

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
  displayedColumns: string[] = ['nombre', 'categoria', 'precio', 'presentacion','acciones'];
  dataSource = new MatTableDataSource(listproducto);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }



}

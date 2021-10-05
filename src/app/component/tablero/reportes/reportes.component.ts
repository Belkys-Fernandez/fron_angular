import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';

import { producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/service/producto.service';

 

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
  listProducto: producto[]=[];

  displayedColumns: string[] = ['nombre', 'categoria', 'precio', 'presentacion','acciones'];
  dataSource!: MatTableDataSource<any> ;

  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor( private _productoService: ProductoService) { }

  ngOnInit(): void {
    this.cargarproducto();

  }
  cargarproducto(){
    this.listProducto= this._productoService.getProducto();
    this.dataSource = new MatTableDataSource( this.listProducto);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }



}

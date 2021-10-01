import { Filme } from './../filme.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { FilmeRead2DataSource } from './filme-read2-datasource';

@Component({
  selector: 'app-filme-read2',
  templateUrl: './filme-read2.component.html',
  styleUrls: ['./filme-read2.component.css']
})
export class FilmeRead2Component implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Filme>;
  dataSource: FilmeRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'nome', 'ano','diretor','genero','descricao','poster'];

  ngOnInit() {
    this.dataSource = new FilmeRead2DataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}

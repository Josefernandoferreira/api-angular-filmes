import { FilmeService } from './../filme.service';
import { Filme } from './../filme.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filme-read',
  templateUrl: './filme-read.component.html',
  styleUrls: ['./filme-read.component.css']
})
export class FilmeReadComponent implements OnInit {

  filmes: Filme[]
  displayedColumns = ['id','poster', 'nome', 'ano', 'diretor','genero','descricao','action']
  
  constructor(private filmeService: FilmeService) { }

  ngOnInit(): void {
    this.filmeService.read().subscribe(filmes => {
      this.filmes = filmes
    })
  }

}

import { Filme } from './../filme.model';
import { FilmeService } from './../filme.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-filme-create',
  templateUrl: './filme-create.component.html',
  styleUrls: ['./filme-create.component.css']
})
export class FilmeCreateComponent implements OnInit {

  filme: Filme = {
    nome: '',
    ano: null,
    diretor:'',
    genero:'',
    descricao: '',
    poster:'',
  }

  constructor(private filmeService: FilmeService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createFilme(): void {
    this.filmeService.create(this.filme).subscribe(() => {
      this.filmeService.showMessage('Filme criado!')
      this.router.navigate(['/filmes'])
    })

  }

  cancel(): void {
    this.router.navigate(['/filmes'])
  }
}

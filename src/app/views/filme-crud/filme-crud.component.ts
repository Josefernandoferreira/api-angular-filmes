import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-filme-crud',
  templateUrl: './filme-crud.component.html',
  styleUrls: ['./filme-crud.component.css']
})
export class FilmeCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Filmes',
      icon: 'storefront',
      routeUrl: '/filmes'
    }
  }

  ngOnInit(): void {
  }

  navigateToFilmeCreate(): void {
    this.router.navigate(['/filmes/create'])
  }

}

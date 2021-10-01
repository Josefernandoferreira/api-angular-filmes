import { Router, ActivatedRoute } from "@angular/router";
import { FilmeService } from "./../filme.service";
import { Filme } from "./../filme.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-filme-delete",
  templateUrl: "./filme-delete.component.html",
  styleUrls: ["./filme-delete.component.css"],
})
export class FilmeDeleteComponent implements OnInit {
  filme: Filme;

  constructor(
    private filmeService: FilmeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.filmeService.readById(id).subscribe((filme) => {
      this.filme = filme;
    });
  }

  deleteFilme(): void {
    this.filmeService.delete(this.filme.id).subscribe(() => {
      this.filmeService.showMessage("Filme excluido com sucesso!");
      this.router.navigate(["/filmes"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/filmes"]);
  }
}

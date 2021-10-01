import { Filme } from "./../filme.model";
import { Router, ActivatedRoute } from "@angular/router";
import { FilmeService } from "./../filme.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-filme-update",
  templateUrl: "./filme-update.component.html",
  styleUrls: ["./filme-update.component.css"],
})
export class FilmeUpdateComponent implements OnInit {
  filme: Filme;

  constructor(
    private filmeService: FilmeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.filmeService.readById(id).subscribe((filme) => {
      this.filme = filme;
    });
  }

  updateFilme(): void {
    this.filmeService.update(this.filme).subscribe(() => {
      this.filmeService.showMessage("Filme atualizado com sucesso!");
      this.router.navigate(["/filmes"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/filmes"]);
  }
}

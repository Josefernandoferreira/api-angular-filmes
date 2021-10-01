import { FilmeDeleteComponent } from './components/filme/filme-delete/filme-delete.component';
import { FilmeUpdateComponent } from './components/filme/filme-update/filme-update.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { FilmeCrudComponent } from "./views/filme-crud/filme-crud.component";
import { FilmeCreateComponent } from './components/filme/filme-create/filme-create.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "filmes",
    component: FilmeCrudComponent
  },
  {
    path: "filmes/create",
    component: FilmeCreateComponent
  },
  {
    path: "filmes/update/:id",
    component: FilmeUpdateComponent
  },
  {
    path: "filmes/delete/:id",
    component: FilmeDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

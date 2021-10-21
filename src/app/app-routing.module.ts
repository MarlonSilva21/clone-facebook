import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {PerfilUsuarioComponent} from "./perfil-usuario/perfil-usuario.component";

const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'perfil-usuario/:id', component: PerfilUsuarioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

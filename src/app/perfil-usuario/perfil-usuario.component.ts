import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {Postagem} from "../models/Postagem";
import {Usuario} from "../models/Usuario";
import {AuthService} from "../services/auth.service";
import {PostagemService} from "../services/postagem.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertService} from "../services/alert.service";

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  foto = environment.photo
  idUsuario: number
  userName: string
  listaUsuario: Usuario[]

  postagem: Postagem = new Postagem()
  listaPostagem: Postagem[]

  key = 'data'
  reverse = true

  usuario: Usuario = new Usuario()
  idUser = environment.id
  fotoUser = environment.photo
  nomeUser = environment.name
  lastNomeUser = environment.lastName

  constructor(
    private authService: AuthService,
    private postagemService: PostagemService,
    private router: Router,
    private route: ActivatedRoute,
    private alertas: AlertService
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token == '') {
      this.router.navigate(['/home'])
    }

    this.idUsuario = this.route.snapshot.params['id']
    this.findByIdUser(this.idUsuario)

    this.postagemService.refreshToken()

  }

  findByIdUser(id: number) {
    this.authService.getByIdUser(id).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

  findByNameUser() {
    this.authService.getByNameUser(this.userName).subscribe((resp: Usuario[]) => {
      this.listaUsuario = resp
    })
  }

  postagemEdit() {
    let ok: boolean  = true

    if(this.idUsuario != this.idUser){
      ok = false
    }

    return ok

  }


  desativado(){
    this.alertas.showAlertInfo('Este recurso não está disponível no momento ! ')
  }

  sair() {
    this.router.navigate(['/login'])
    environment.token = ''
    environment.name = ''
    environment.photo = ''
    environment.id = 0
  }
}

import {Component, OnInit} from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {PostagemService} from "../services/postagem.service";
import {Usuario} from "../models/Usuario";
import {Postagem} from "../models/Postagem";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nome = environment.name
  sobrenome = environment.lastName
  photo = environment.photo
  idUser = environment.id

  userName: string
  listaUsuario: Usuario[]
  listaAllUsuario: Usuario[]

  user: Usuario = new Usuario()

  postagem: Postagem = new Postagem()
  listaPostagem: Postagem[]

  key = 'data'

  reverse = true


  constructor(
    private router: Router,
    private authService: AuthService,
    private postagemService: PostagemService
  ) {
  }

  ngOnInit() {
    window.scroll(0, 0)

    if (environment.token == '') {
      this.router.navigate(['/login'])
    }

    this.authService.refreshToken()
    this.postagemService.refreshToken()
    this.getAllPostagem()
    this.getAllUser()
  }

  getAllPostagem() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagem = resp
    })
  }

  getAllUser(){
    this.authService.getAll().subscribe((resp: Usuario[]) => {
      this.listaAllUsuario = resp
    })
  }

  findByNameUser(){
      this.authService.getByNameUser(this.userName).subscribe((resp: Usuario[]) => {
        this.listaUsuario = resp
      })
  }

  publicar() {
    this.user.id = this.idUser
    this.postagem.usuario = this.user

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
      this.getAllPostagem()
    })
  }

  sair()
    {
      this.router.navigate(['/login'])
      environment.token = ''
      environment.name = ''
      environment.photo = ''
      environment.id = 0
    }


  }

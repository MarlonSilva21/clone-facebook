import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {Usuario} from "../models/Usuario";
import {UsuarioLogin} from "../models/UsuarioLogin";
import {environment} from "../../environments/environment.prod";
import {PostagemService} from "../services/postagem.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario()
  usuarioLogin: UsuarioLogin = new UsuarioLogin()

  confirmarSenha: string

  constructor(
    private router: Router,
    private authService: AuthService,
    private postagemService: PostagemService
  ) { }

  ngOnInit(){

    window.scroll(0,0)
    scroll(0,0)
  }


  cadastrar() {
    if (this.usuario.email.indexOf('.') === -1) {
      alert('Informe um email válido')
    }

    else if (this.usuario.email.indexOf('@') === -1) {
      alert('Informe um email válido')
    }

    else if (this.usuario.password.length < 6) {
      alert('Dígite uma senha com no mínimo 6 caracteres!')
    }

    else {

      if(this.usuario.photo == null) {
        this.usuario.photo = "https://i.imgur.com/U0UhX6I.png"
      }

      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp

        window.location.reload()
        alert('Usuário cadastrado com sucesso, Conecte-se')
      })
    }
  }

  entrar(){
    this.authService.entrar(this.usuarioLogin).subscribe((resp: UsuarioLogin) => {
      this.usuarioLogin = resp

      environment.token = this.usuarioLogin.token
      environment.name = this.usuarioLogin.name
      environment.lastName = this.usuarioLogin.lastName
      environment.photo = this.usuarioLogin.photo
      environment.id = this.usuarioLogin.id


      this.router.navigate(['/home'])
    }, erro => {
      if (erro.status == 500){
        alert('Email ou senha estão errados!')
      }
    })
  }
}

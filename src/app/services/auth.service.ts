import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";
import {Usuario} from "../models/Usuario";
import {Observable} from "rxjs";
import {UsuarioLogin} from "../models/UsuarioLogin";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('https://apiclonefb.herokuapp.com/usuario/login', usuarioLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://apiclonefb.herokuapp.com/usuario/register', usuario)
  }

  getAll(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>('https://apiclonefb.herokuapp.com/usuario/', this.token)
  }

  getByIdUser(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`https://apiclonefb.herokuapp.com/usuario/${id}`, this.token)
  }

  getByNameUser(name: string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`https://apiclonefb.herokuapp.com/usuario/name/${name}`, this.token)
  }
}

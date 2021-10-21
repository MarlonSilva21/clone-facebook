import {Postagem} from "./Postagem";

export class Usuario{

  public id: number
  public name: string
  public lastName: string
  public email: string
  public password: string
  public photo: string
  public gender: string
  public birthDate: Date

  public postagens: Postagem[]

}

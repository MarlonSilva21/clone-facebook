import {Usuario} from "./Usuario";

export class Postagem{

  public id: number
  public text: string
  public image: string
  public date: Date

  public usuario: Usuario
}

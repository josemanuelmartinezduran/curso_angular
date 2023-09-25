import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  userList:Usuario[] = Array();

  constructor() { }

  agregaUsuario(usuario:Usuario){
    this.userList.push(usuario);
  }

  borraUsuario(usuario:Usuario){
    const index = this.userList.indexOf(usuario);
    if (index > -1) {
      this.userList.splice(index, 1);
    }
  }

  existeUsuario(nombre:string):boolean{
    let existe:boolean = false;
    this.userList.forEach((usuario:Usuario) =>{
      if(usuario.nombre == nombre)
        existe = true;
    })
    return existe;
  }

}

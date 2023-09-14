import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  username: String = '';
  accessToken: String = '';
  rolId: String = '';
  name: String = '';

  constructor() {}

  isSessionValid(): Boolean{
    if(this.accessToken == "12GHSD7726")
      return true
    return false
  }

  setSession() {
    window.sessionStorage.setItem('username', this.username.toString());
    window.sessionStorage.setItem('accessToken', this.accessToken.toString());
    window.sessionStorage.setItem('rolId', this.rolId.toString());
    window.sessionStorage.setItem('name', this.name.toString());
  }

  getSession() {
    const username = window.sessionStorage.getItem('username');
    if (username) this.username = username;
    const accesToken = window.sessionStorage.getItem('accessToken');
    if (accesToken) this.accessToken = accesToken;
    const rolId = window.sessionStorage.getItem('rolId');
    if (rolId) this.rolId = rolId;
    const name = window.sessionStorage.getItem('name');
    if (name) this.name = name;
  }

  destroySession(){
    this.name ="";
    this.accessToken = "";
    this.username = "";
    this.rolId = "";
    this.setSession();
    window.sessionStorage.clear();
  }

  auth(username:String, password:String):boolean{
    if(username == "admin" && password == "admin"){
      this.username ="admin";
      this.name = "Juan Perez";
      this.accessToken = "12GHSD7726";
      this.rolId = "Director General";
      this.setSession();
      return true;
    }
    return false;
  }
}

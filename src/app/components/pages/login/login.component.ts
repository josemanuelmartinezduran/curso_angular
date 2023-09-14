import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from 'src/app/models/loginform';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  loginForm: LoginForm = new LoginForm();

  constructor(private sessionService:SessionService, private router:Router) {}

  auth() {
    if(!this.loginForm.isValid()){
      alert("Corrija los errores");
      return;
    } if(this.sessionService.auth(this.loginForm.username, this.loginForm.password)){
      this.router.navigate(["/welcome"])
    } else{
      alert("Error al iniciar sesion");
    }
  }

  limpia(){
    this.loginForm.limpiaFomulario();
  }
}

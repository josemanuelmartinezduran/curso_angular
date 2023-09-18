import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{
  usuario:String ="";
  constructor(private sessionService:SessionService, private router:Router){}

  ngOnInit(): void {
    this.sessionService.getSession();
    if(!this.sessionService.isSessionValid()){
      alert("Sesión inválida");
      this.router.navigate(["/"]);
    }else{
      this.usuario = this.sessionService.name;
    }
  }

  closeSession(){
    this.router.navigate(["/logout"])
  }

  chekSomething(){
    this.sessionService.rolId;
    if(window.sessionStorage.getItem("rolId")=="usuario"){ //Peligroso
      console.log("haz algo peligroso");
    }
  }
}

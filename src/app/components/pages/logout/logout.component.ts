import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{

  constructor(private sessionService:SessionService, private router:Router){}

  ngOnInit(): void {
    this.sessionService.destroySession();
    setTimeout(()=>{
      this.router.navigate([""]);
    }, 3000);
  }
}

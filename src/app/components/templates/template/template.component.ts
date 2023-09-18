import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item';
import { MenuService } from '../../../services/menu.service';
import { SidebarMenuItem } from 'src/app/models/sidebar-menu-item';
import { SessionService } from 'src/app/services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit{
  mainMenu:MenuItem[] = Array();
  sidebarMenu:SidebarMenuItem[] = Array();
  sideBarClass = "";
  contentClass = "";

  constructor(private menuService:MenuService, public sessionService:SessionService, private router:Router){}

  ngOnInit(): void {
    this.mainMenu = this.menuService.getMainMenu();
    this.sidebarMenu = this.menuService.getSidebar();
  }

  cerrarSesion(){
    this.router.navigate(["/logout"]);
  }

  togleExpand(){
    if(this.sideBarClass == ""){
      this.sideBarClass = "main-sidebar-contracted";
      this.contentClass = "content-wrapper-expanded";
    }else{
      this.sideBarClass = "";
      this.contentClass = "";
    }
  }
}

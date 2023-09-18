import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item';
import { SidebarMenuItem } from '../models/sidebar-menu-item';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getMainMenu():MenuItem[]{
    return [
      new MenuItem("Home", "/d/dashboard"),
      new MenuItem("Mis datos", "/d/datos"),
      new MenuItem("Tercero", "/d/prueba"),
    ]
  }

  getSidebar(){
    return [
      new SidebarMenuItem("Principal", [
        new MenuItem("Submenu1", "d/ejemplo", "cancel"),
        new MenuItem("Submenu2", "d/ejemplo"),
      ]),
      new SidebarMenuItem("Principal Dos", [
        new MenuItem("Submenu1", "d/ejemplo"),
        new MenuItem("Submenu2", "d/ejemplo"),
      ])
    ]
  }
}

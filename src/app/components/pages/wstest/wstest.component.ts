import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-wstest',
  templateUrl: './wstest.component.html',
  styleUrls: ['./wstest.component.css']
})
export class WstestComponent {
  constructor(public usuarioService:UsuariosService){}
}

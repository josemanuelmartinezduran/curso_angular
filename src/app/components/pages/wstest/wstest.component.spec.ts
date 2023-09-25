import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WstestComponent } from './wstest.component';
import { Usuario } from 'src/app/models/usuario';

describe('WstestComponent', () => {
  let component: WstestComponent;
  let fixture: ComponentFixture<WstestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WstestComponent]
    });
    fixture = TestBed.createComponent(WstestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Debería insertar usuario", () => {
    component.usuarioService.agregaUsuario(new Usuario("Juan Perez", "Hola", "juan@correo.com"));
    expect(component.usuarioService.existeUsuario("Juan Perez")).toBe(true);
  });
});

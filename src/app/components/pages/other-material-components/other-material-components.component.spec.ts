import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherMaterialComponentsComponent } from './other-material-components.component';

describe('OtherMaterialComponentsComponent', () => {
  let component: OtherMaterialComponentsComponent;
  let fixture: ComponentFixture<OtherMaterialComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherMaterialComponentsComponent]
    });
    fixture = TestBed.createComponent(OtherMaterialComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

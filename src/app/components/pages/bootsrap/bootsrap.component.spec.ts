import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootsrapComponent } from './bootsrap.component';

describe('BootsrapComponent', () => {
  let component: BootsrapComponent;
  let fixture: ComponentFixture<BootsrapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BootsrapComponent]
    });
    fixture = TestBed.createComponent(BootsrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

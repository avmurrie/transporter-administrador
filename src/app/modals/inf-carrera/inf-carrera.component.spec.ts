import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfCarreraComponent } from './inf-carrera.component';

describe('InfCarreraComponent', () => {
  let component: InfCarreraComponent;
  let fixture: ComponentFixture<InfCarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfCarreraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreInscripcionComponent } from './pre-inscripcion.component';

describe('PreInscripcionComponent', () => {
  let component: PreInscripcionComponent;
  let fixture: ComponentFixture<PreInscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreInscripcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

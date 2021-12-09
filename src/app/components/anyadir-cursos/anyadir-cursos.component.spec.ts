import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyadirCursosComponent } from './anyadir-cursos.component';

describe('AnyadirCursosComponent', () => {
  let component: AnyadirCursosComponent;
  let fixture: ComponentFixture<AnyadirCursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnyadirCursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnyadirCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

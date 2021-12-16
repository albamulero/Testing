import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyadirTemasComponent } from './anyadir-temas.component';

describe('AnyadirTemasComponent', () => {
  let component: AnyadirTemasComponent;
  let fixture: ComponentFixture<AnyadirTemasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnyadirTemasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnyadirTemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaCursosComponent } from './area-cursos.component';

describe('AreaCursosComponent', () => {
  let component: AreaCursosComponent;
  let fixture: ComponentFixture<AreaCursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaCursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

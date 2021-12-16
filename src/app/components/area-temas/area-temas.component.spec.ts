import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaTemasComponent } from './area-temas.component';

describe('AreaTemasComponent', () => {
  let component: AreaTemasComponent;
  let fixture: ComponentFixture<AreaTemasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaTemasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaTemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

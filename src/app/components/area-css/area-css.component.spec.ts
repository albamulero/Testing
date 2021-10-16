import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaCssComponent } from './area-css.component';

describe('AreaCssComponent', () => {
  let component: AreaCssComponent;
  let fixture: ComponentFixture<AreaCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

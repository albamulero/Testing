import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaHtmlComponent } from './area-html.component';

describe('AreaHtmlComponent', () => {
  let component: AreaHtmlComponent;
  let fixture: ComponentFixture<AreaHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

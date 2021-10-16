import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaJavascriptComponent } from './area-javascript.component';

describe('AreaJavascriptComponent', () => {
  let component: AreaJavascriptComponent;
  let fixture: ComponentFixture<AreaJavascriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaJavascriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaJavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

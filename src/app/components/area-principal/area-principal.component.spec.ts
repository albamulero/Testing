import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaPrincipalComponent } from './area-principal.component';

describe('AreaPrincipalComponent', () => {
  let component: AreaPrincipalComponent;
  let fixture: ComponentFixture<AreaPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

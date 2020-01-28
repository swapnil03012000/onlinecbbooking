import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabbookComponent } from './cabbook.component';

describe('CabbookComponent', () => {
  let component: CabbookComponent;
  let fixture: ComponentFixture<CabbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

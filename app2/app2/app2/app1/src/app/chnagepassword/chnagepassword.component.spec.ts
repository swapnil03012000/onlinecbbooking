import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChnagepasswordComponent } from './chnagepassword.component';

describe('ChnagepasswordComponent', () => {
  let component: ChnagepasswordComponent;
  let fixture: ComponentFixture<ChnagepasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChnagepasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChnagepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

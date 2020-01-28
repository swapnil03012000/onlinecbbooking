import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaulicabsComponent } from './maulicabs.component';

describe('MaulicabsComponent', () => {
  let component: MaulicabsComponent;
  let fixture: ComponentFixture<MaulicabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaulicabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaulicabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

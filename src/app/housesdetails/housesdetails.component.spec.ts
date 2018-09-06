import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesdetailsComponent } from './housesdetails.component';

describe('HousesdetailsComponent', () => {
  let component: HousesdetailsComponent;
  let fixture: ComponentFixture<HousesdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousesdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

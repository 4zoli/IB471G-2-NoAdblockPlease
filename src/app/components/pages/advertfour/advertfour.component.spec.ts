import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertfourComponent } from './advertfour.component';

describe('AdvertfourComponent', () => {
  let component: AdvertfourComponent;
  let fixture: ComponentFixture<AdvertfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

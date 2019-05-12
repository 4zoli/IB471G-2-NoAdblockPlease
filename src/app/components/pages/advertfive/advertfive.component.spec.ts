import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertfiveComponent } from './advertfive.component';

describe('AdvertfiveComponent', () => {
  let component: AdvertfiveComponent;
  let fixture: ComponentFixture<AdvertfiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertfiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

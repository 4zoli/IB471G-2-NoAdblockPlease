import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdverttwoComponent } from './adverttwo.component';

describe('AdverttwoComponent', () => {
  let component: AdverttwoComponent;
  let fixture: ComponentFixture<AdverttwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdverttwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdverttwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

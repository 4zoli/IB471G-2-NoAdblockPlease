import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertthreeComponent } from './advertthree.component';

describe('AdvertthreeComponent', () => {
  let component: AdvertthreeComponent;
  let fixture: ComponentFixture<AdvertthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

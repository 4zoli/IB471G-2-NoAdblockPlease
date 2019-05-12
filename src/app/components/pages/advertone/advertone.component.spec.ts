import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertoneComponent } from './advertone.component';

describe('AdvertoneComponent', () => {
  let component: AdvertoneComponent;
  let fixture: ComponentFixture<AdvertoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

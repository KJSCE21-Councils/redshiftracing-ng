import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePressComponent } from './home-press.component';

describe('HomePressComponent', () => {
  let component: HomePressComponent;
  let fixture: ComponentFixture<HomePressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

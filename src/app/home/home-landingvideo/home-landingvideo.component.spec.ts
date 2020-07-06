import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLandingvideoComponent } from './home-landingvideo.component';

describe('HomeLandingvideoComponent', () => {
  let component: HomeLandingvideoComponent;
  let fixture: ComponentFixture<HomeLandingvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLandingvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLandingvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

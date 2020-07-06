import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalModule } from './global/global.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { HomeAboutusComponent } from './home/home-aboutus/home-aboutus.component';
import { HomeGalleryComponent } from './home/home-gallery/home-gallery.component';
import { HomeTimelineComponent } from './home/home-timeline/home-timeline.component';
import { HomePressComponent } from './home/home-press/home-press.component';
import { HomeUpdatesComponent } from './home/home-updates/home-updates.component';
import { HomeLandingvideoComponent } from './home/home-landingvideo/home-landingvideo.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SponsorsComponent,
    GalleryComponent,
    TeamComponent,
    ContactComponent,
    HomeLandingvideoComponent,
    HomeAboutusComponent,
    HomeGalleryComponent,
    HomeTimelineComponent,
    HomePressComponent,
    HomeUpdatesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GlobalModule,
    FlexLayoutModule,
    MatCardModule,
    CarouselModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

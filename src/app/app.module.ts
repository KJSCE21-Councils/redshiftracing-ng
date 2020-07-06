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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SponsorsComponent,
    GalleryComponent,
    TeamComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GlobalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

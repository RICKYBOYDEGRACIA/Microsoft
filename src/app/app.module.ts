import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { ActualPageComponent } from './actual-page/actual-page.component';

import { NavCarouselComponent } from './nav-carousel/nav-carousel.component';
import { TestingpageComponent } from './testingpage/testingpage.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationBarComponent,
    ActualPageComponent,
    NavCarouselComponent,
    TestingpageComponent, 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, // CLI adds AppRoutingModule to the AppModule's imports array

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

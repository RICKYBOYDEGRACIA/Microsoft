import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ActualPageComponent } from './actual-page/actual-page.component';
import { TestingpageComponent } from './testingpage/testingpage.component';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router


const routes: Routes = [
    {  path: '', redirectTo: '/actual-page', pathMatch: 'full'},
    { path: 'footer', component: FooterComponent },
    { path: 'navigation-bar', component: NavigationBarComponent },
    { path: 'actual-page', component:ActualPageComponent},
    { path: 'testing-page', component:TestingpageComponent},
    
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}   
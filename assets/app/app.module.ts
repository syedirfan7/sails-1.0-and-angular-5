import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ChatappComponent } from './chatapp/chatapp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatappComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent }
    ], {useHash: true})
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PublicModule} from './public/public.module';
import {PublicComponent} from "./public/public.component";

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

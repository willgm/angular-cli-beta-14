import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StarwarsModule } from './starwars/starwars.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StarwarsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

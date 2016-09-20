import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { StarwarsComponent } from './starwars.component';
import { StarwarsService } from './starwars.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
  ],
  declarations: [StarwarsComponent],
  providers: [StarwarsService],
  exports: [StarwarsComponent],
})
export class StarwarsModule { }

import { Component, OnInit } from '@angular/core';
import { StarwarsService } from './starwars.service';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css']
})
export class StarwarsComponent implements OnInit {
  list;

  constructor(private people: StarwarsService) { }

  ngOnInit() {
    this.list = this.people.getAll();
  }

}

import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs';

@Injectable()
export class StarwarsService {

  api = "https://starwars-json-server-ewtdxbyfdz.now.sh/people";

  constructor(private http:Http) { }

  getAll() {
    return this.http
      .get(this.api)
      .map(r => r.json());
  }

}

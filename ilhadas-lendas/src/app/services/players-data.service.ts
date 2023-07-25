import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayersDataService {

  url="http://localhost:3333/players";

  constructor(private http:HttpClient) { }
  players()
  {
   return this.http.get(this.url);
  }
}

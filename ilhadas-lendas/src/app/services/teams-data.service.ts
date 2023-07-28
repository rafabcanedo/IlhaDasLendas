import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamsDataService {

  url="http://localhost:3333/teams/release"

  constructor(private http:HttpClient) { }
  teams() 
  {
   return this.http.get(this.url)
  }
}

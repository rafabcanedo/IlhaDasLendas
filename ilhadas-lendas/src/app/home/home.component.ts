import { Component } from '@angular/core';
import { PlayersDataService } from '../services/players-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  players: any;
  constructor(private playersData:PlayersDataService)
  {
    this.playersData.players().subscribe((data) =>{
      // console.log("data", data)
      this.players=data;
    })
  }
}

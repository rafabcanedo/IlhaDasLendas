import { Component } from '@angular/core';
import { PlayersDataService } from '../services/players-data.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent {
  players: any;
  constructor(private playersData:PlayersDataService)
  {
    this.playersData.players().subscribe((data) =>{
      // console.log("data", data)
      this.players=data;
    })
  }
}

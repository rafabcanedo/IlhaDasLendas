import { Component } from '@angular/core';
import { PlayersDataService } from './services/players-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ilha das lendas';
  players: any;
  constructor(private playersData:PlayersDataService)
  {
    this.playersData.players().subscribe((data) =>{
      // console.log("data", data)
      this.players=data;
    })
  }
}

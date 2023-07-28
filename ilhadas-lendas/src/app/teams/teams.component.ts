import { Component } from '@angular/core';
import { TeamsDataService } from '../services/teams-data.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent {
  teams: any;
  constructor(private teamsData:TeamsDataService)
  {
    this.teamsData.teams().subscribe((data) =>{
      this.teams=data;
    })
  }
}

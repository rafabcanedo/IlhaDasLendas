import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { NgIconsModule } from '@ng-icons/core';
import { simpleTwitch, simpleInstagram, simpleYoutube, simpleDiscord, simpleTwitter, simpleTiktok } from '@ng-icons/simple-icons'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from './teams/teams.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayersComponent,
    TeamsComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgIconsModule.withIcons({ simpleTwitch, simpleInstagram, simpleYoutube, simpleDiscord, simpleTwitter, simpleTiktok }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

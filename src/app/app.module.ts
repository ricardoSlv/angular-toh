import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataService } from 'app/in-memory-data.service'

import { AppRoutingModule } from 'app/app-routing.module'
import { AppComponent } from 'app/app.component'
import { HeroesComponent } from 'app/heroes/heroes.component'
import { HeroDetailComponent } from 'app/hero-detail/hero-detail.component'
import { MessagesComponent } from 'app/messages/messages.component'
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component'

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

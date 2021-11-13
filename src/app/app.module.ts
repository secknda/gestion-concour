import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerticalNavComponent } from './vertical-nav/vertical-nav.component';
import { HorizontalNavComponent } from './horizontal-nav/horizontal-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { ConcoursComponent } from './concours/concours.component';
import { EditionsComponent } from './editions/editions.component';
import { HttpClientModule } from '@angular/common/http';
import { NetworkingService } from 'src/service/networking.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    VerticalNavComponent,
    HorizontalNavComponent,
    DashboardComponent,
    FooterComponent,
    ConcoursComponent,
    EditionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(public networkingService: NetworkingService) { }
}

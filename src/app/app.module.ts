import { FooterComponent } from './footer/footer.component';
import { ExpandableComponent } from './expandable/expandable.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from 'src/app/searchbar/searchbar.component';
import { CategoryComponent } from 'src/app/category/category.component';


@NgModule({
  declarations: [AppComponent,ExpandableComponent,FooterComponent,SearchbarComponent,CategoryComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  exports: [
    ExpandableComponent,
      FooterComponent
  ],  
  bootstrap: [AppComponent],
})
export class AppModule {}

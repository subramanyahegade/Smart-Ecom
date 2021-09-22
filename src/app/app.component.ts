import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ServicesService } from 'src/app/services.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public items: any = [];
  categoryData:any = [];
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public api: ServicesService
  ) {
    this.initializeApp(); 
    // this.items = [
    //   { expanded: false,title:'Vegetables',count:7 },
    //   { expanded: false,title:'Fruits',count:5 },
    //   { expanded: false,title:'Otheres',count:3 },
    // ];
  }

  ngOnInit() {
    this.api.getCategory().subscribe(data=>{
      console.log(data);
      this.categoryData = data.data;
      this.categoryData.forEach(element => {
        element.expanded = false;
      });
    },err=>{
      console.log(err);
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  expandItem(item): void {
    console.log(item);
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.categoryData.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }
}

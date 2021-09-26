import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categoryData:any = [];

  ngOnInit() {
    this.api.getCategory().subscribe(data=>{
      console.log(data);
      this.categoryData = data.data;
    },err=>{
      console.log(err);
    })
  }

  constructor(public actionSheetController: ActionSheetController,public api: ServicesService) {}
  
    async presentActionSheet() {
      const actionSheet = await this.actionSheetController.create({
        header: 'Categories',
        cssClass: 'my-custom-class',
        buttons: [{
          text: 'Category1',
          role: 'destructive',
          handler: () => {
            console.log('Delete clicked');
          }
        }, {
          text: 'Category2',
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: 'Category3',
          handler: () => {
            console.log('Play clicked');
          }
        }, {
          text: 'Category4',
          handler: () => {
            console.log('Favorite clicked');
          }
        }]
      });
      await actionSheet.present();
  
      const { role } = await actionSheet.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }
  

}

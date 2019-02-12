import { Component } from '@angular/core';
import { NavController,AlertController,ToastController } from 'ionic-angular';

import { TechnologyProvider } from '../../providers/technology/technology';

import { ArchivedPage } from '../../pages/archived/archived';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	public technologies = [];
	public EnableOrder=false;

  constructor(private toastCont:ToastController,private techService:TechnologyProvider,public navCtrl: NavController,private alert:AlertController) {
  		this.technologies= this.techService.getAllTech();
  }

  /*for reorder*/
  toggleOrder(){
  	this.EnableOrder = !this.EnableOrder;
  }

  /*for archive Tech (remove it)*/
  removeTech(TechIndex){
      this.techService.removeTech(TechIndex);
  }

  /*go to archive page*/
  archivePage(){
    this.navCtrl.push(ArchivedPage);
  }


  // reorder function
  reorderItems(index) {
    let element =this.technologies[index.from];
     this.technologies.splice(index.from, 1);
     this.technologies.splice(index.to, 0, element);
   }


  /*ajouter une tech*/
  addtech(){
    let alert = this.alert.create({
  		title:"add Note",
  		inputs:[
  			{
  				type:"text",
  				name:"tech"
  			}
  		],
  		buttons:[
	  		{
	  			text:"cancel"
	  		},
  			{
  				text:"add",
  				handler:(input_data)=>{
  					let item ;
  					item = input_data.tech;
  					this.techService.addTech(item);
            // for toast
            let toastAdd = this.toastCont.create({
              message:"successfully added",
              duration:2000
            });
            toastAdd.present();
  				}
  			}

  		]
  	});
  	alert.present();
  }

  // for edit tech
  editTech(index){
      let techToEdit =this.technologies[index];

        let alert = this.alert.create({
          title:"Edit Note",
          inputs:[
            {
              type:"text",
              name:"tech",
              value:techToEdit // or  this.technologies[index]
            }
          ],
          buttons:[
            {
              text:"cancel"
            },
            {
              text:"Edit Note",
              handler:(input_data)=>{
                let item ;
                item = input_data.tech;
                this.techService.editTech(index,item);
                // for toast
                let toastAdd = this.toastCont.create({
                  message:"successfully Edited",
                  duration:2000
                });
                toastAdd.present();
              }
            }

          ]
        });
        alert.present();
  }

}

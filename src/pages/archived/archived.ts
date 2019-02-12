import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TechnologyProvider } from '../../providers/technology/technology';


@IonicPage()
@Component({
  selector: 'page-archived',
  templateUrl: 'archived.html',
})
export class ArchivedPage {

	public ArchiveTech=[];

  constructor(private techService:TechnologyProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.ArchiveTech=this.techService.getArchiveTech();
  }

}

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  urlImg:any;
  constructor(public modalController: ModalController,
    public navParams: NavParams) { }

  ngOnInit() {
    this.urlImg = this.navParams.get('urlImg');
    console.log(this.urlImg);
  }

  closeModal()
  {
    this.modalController.dismiss();
  }


}

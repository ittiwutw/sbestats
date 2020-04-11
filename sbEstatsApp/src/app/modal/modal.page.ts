import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  urlImg1:any;
  urlImg2:any;
  urlImg3:any;
  urlImg4:any;
  constructor(public modalController: ModalController,
    public navParams: NavParams) { }

  ngOnInit() {
    this.urlImg1 = this.navParams.get('urlImg1');
    this.urlImg2 = this.navParams.get('urlImg2');
    this.urlImg3 = this.navParams.get('urlImg3');
    this.urlImg4 = this.navParams.get('urlImg4');
    console.log(this.urlImg1 + " " + this.urlImg2 +" "+ this.urlImg3 +" "+ this.urlImg4);
  }

  closeModal()
  {
    this.modalController.dismiss(true);
  }


}

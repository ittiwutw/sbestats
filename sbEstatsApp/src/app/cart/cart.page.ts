import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  carts = [];

  constructor(
    private router: Router,
    private storage: Storage
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.storage.get('cart').then(carts => {
      console.log(carts);
      this.carts = carts;
    });
  }

  onClickEstate(item) {
    this.router.navigate(['/estate-detail', {
      estate: JSON.stringify(item)
    }]);
  }

  remove(index) {
    this.carts.splice(index, 1);
    this.storage.remove('cart').then(removed => {
      this.storage.set('cart', this.carts);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  name: any;

  constructor(
    private router: Router,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.storage.get('user').then(user => {
      if (user) {
        this.name = user.name;
        console.log(user);
      }
    });
  }

  logout() {
    this.storage.remove('user').then(removed => {
      this.router.navigate(['/login']);
    });
  }

  onClickCart() {
    this.router.navigate(['/tabs/cart']);
  }

  onClickEditProfile() {
    this.router.navigate(['/edit-profile']);
  }

  onClickMyEstate() {
    this.router.navigate(['/tabs/my-estate']);
  }
}

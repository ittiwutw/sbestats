import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private router: Router,
    private storage: Storage
  ) { }

  logout() {
    this.storage.remove('user').then(removed => {
      this.router.navigate(['/login']);
    });
  }
}

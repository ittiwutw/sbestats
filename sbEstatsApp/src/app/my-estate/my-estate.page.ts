import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-estate',
  templateUrl: './my-estate.page.html',
  styleUrls: ['./my-estate.page.scss'],
})
export class MyEstatePage implements OnInit {
  userData: any;
  estates = [];
  constructor(
    private storage: Storage,
    private restApi: RestService,
    private router: Router,
  ) {
    this.storage.get('user').then(user => {
      this.userData = user;
      console.log(this.userData);
      this.getAllEstate();
    });
  }

  ngOnInit() {
  }

  getAllEstate() {
    this.estates = [];
    this.restApi.getEstate().then(res => {
      console.log(res);
      let data: any;
      data = res;
      const allEstate = data.data.result;

      allEstate.forEach(estate => {
        if (estate.userId === this.userData.id) {
          this.estates.push(estate);
        }
      });
      console.log(this.estates);
    });
  }

  onClickEdit(estate) {
    this.router.navigate(['/edit-estate', {
      estate: JSON.stringify(estate)
    }]);
  }

  onClickDelete(estate) {
    const param = {
      id: estate.id
    };
    this.restApi.deleteEstate(param).then(res => {
      alert('ลบข้อมูลเสร็จสิน');
      this.getAllEstate();
      console.log(this.estates);
    });
  }

}

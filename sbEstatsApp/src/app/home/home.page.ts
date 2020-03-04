import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  estates: any;
  constructor(
    private router: Router,
    private restApi: RestService
  ) {
    this.getAllEstate();
  }

  ngOnInit() {
  }

  getAllEstate() {
    this.restApi.getEstate().then(res => {
      console.log(res);
      let data: any;
      data = res;

      this.estates = data.data.result;
      console.log(this.estates);
    });
  }

  onClickEstate(item) {
    this.router.navigate(['/estate-detail', {
      estate: JSON.stringify(item)
    }]);
  }

}

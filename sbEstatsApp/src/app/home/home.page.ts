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
  currentSearch = '';
  colorAll = 'success';
  colorLoan = 'light';
  colorBuy = 'light';

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

  onClickChat() {
    this.router.navigate(['/chat']);
  }

  searchItem(ev: any) {
    this.estates = [];
    const val = ev.target.value;

    if (val && val.trim() !== '') {

      const param = {
        name: val,
        sellType: ''
      };

      this.currentSearch = val;

      this.restApi.searchEstate(param).then(res => {
        console.log(res);
        let data: any;
        data = res;

        if (data.response_code === '0000') {
          this.estates = data.data.result;
        }
        console.log(this.estates);
      });
    } else {
      const param = {
        name: '',
        sellType: ''
      };

      this.currentSearch = val;

      this.restApi.searchEstate(param).then(res => {
        console.log(res);
        let data: any;
        data = res;

        if (data.response_code === '0000') {
          this.estates = data.data.result;
        }
        console.log(this.estates);
      });
    }
  }

  selectType(type) {

    this.estates = [];

    const param = {
      name: this.currentSearch,
      sellType: type
    };

    this.restApi.searchEstate(param).then(res => {
      console.log(res);
      let data: any;
      data = res;
      if (data.response_code === '0000') {
        this.estates = data.data.result;
      }
      console.log(this.estates);
    });

    if (type === 'เช่า') {
      this.colorAll = 'light';
      this.colorLoan = 'success';
      this.colorBuy = 'light';
    } else if (type === 'ขาย') {
      this.colorAll = 'light';
      this.colorLoan = 'light';
      this.colorBuy = 'success';
    } else if (type === '') {
      this.colorAll = 'success';
      this.colorLoan = 'light';
      this.colorBuy = 'light';
    }
  }

}

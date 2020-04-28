import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tax-calculator',
  templateUrl: './tax-calculator.page.html',
  styleUrls: ['./tax-calculator.page.scss'],
})
export class TaxCalculatorPage implements OnInit {
  viewMode: any;
  price: number;
  priceFee: number;
  sumPrice2: number;
  priceFeeTranfer: number;
  price3: number;
  vatPrice: number;
  vatPrice2: number;

  stampPrice: number;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.price = params.price;
      console.log(this.price);
      this.calulate();
    });
  }

  ngOnInit() {
    this.viewMode = 'condo';
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  calulate() {
    this.priceFee = this.price * (1 / 100);
    this.sumPrice2  = this.price * (1 / 100);

    this.stampPrice = this.price * (0.5 / 100);
    this.vatPrice = this.priceFee + this.sumPrice2;
    this.vatPrice2 = this.priceFee + this.stampPrice + this.sumPrice2;
  }

  keyPrice(ev: any) {
    const val = ev.target.value;

    if (val && val.trim() !== '') {
      this.calulate();
    }
  }

}

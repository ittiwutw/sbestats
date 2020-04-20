import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tax-calculator',
  templateUrl: './tax-calculator.page.html',
  styleUrls: ['./tax-calculator.page.scss'],
})
export class TaxCalculatorPage implements OnInit {
  viewMode: any;
  constructor() { }

  ngOnInit() {
    this.viewMode = 'condo';
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}

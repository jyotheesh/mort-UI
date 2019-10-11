import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  cols: any[];

  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'sno', header: 'Sr.No' },
      { field: 'monthlyInstallment', header: 'Monthly Installment' },
      { field: 'interest', header: 'Interest' },
      { field: 'principal', header: 'Principal' },
      { field: 'balance', header: 'Balance' },
    ];
  }

}

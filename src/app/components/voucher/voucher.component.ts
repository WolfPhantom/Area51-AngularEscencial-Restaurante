import { Component, OnInit, Input } from '@angular/core';
import { Dish } from 'projects/data-models/src/lib/interfaces/dishes.interfaces';
import { voucherElement } from 'projects/data-models/src/lib/interfaces/voucherElement.interfaces';

@Component({
  selector: 'rw-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.scss']
})
export class VoucherComponent implements OnInit {
  @Input()dishVoucher: Dish [] = [];
  ElementsVoucher: voucherElement[] = [];
  suma = 0;
  constructor() { }

  ngOnInit(): void {
  }
  Total(): any
  {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.dishVoucher.length; i++)
    {
        this.suma += Number(this.dishVoucher[i].price);
    }
  }


}

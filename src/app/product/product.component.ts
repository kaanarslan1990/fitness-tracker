import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'khn-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productsName ="Khan book"

  constructor() { }

  ngOnInit(): void {
  }

}

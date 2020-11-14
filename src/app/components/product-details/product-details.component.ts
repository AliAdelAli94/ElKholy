import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute , Params } from '@angular/router';
import { ProductsService } from 'src/app/services/Products.service';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
productId : number ;
productData : Product;
  constructor(private router : ActivatedRoute,private productService : ProductsService) { 

  }

  ngOnInit() {
    let queryStringSegments: string[] = [];
    queryStringSegments = window.location.href.split('/');
    this.productId = parseInt(queryStringSegments[queryStringSegments.length - 1]);
    if(this.productId)
      this.productData = this.productService.getProductbyId(this.productId);   
   }

}

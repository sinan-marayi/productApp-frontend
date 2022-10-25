import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css'],
})
export class AddproductsComponent implements OnInit {
  constructor(private api : ApiService) {}

  ngOnInit(): void {}
  productName = '';
  productCode = '';
  manufacturingDate = '';
  expiringDate = '';
  price = '';

  passDetails=()=>{
    const data:any = {
      "productName" : this.productName,
      "productCode" : this.productCode,
      "manufacturingDate" : this.manufacturingDate,
      "expiringDate" : this.expiringDate,
      "price" : this.price,
    }
    this.api.addProduct(data).subscribe((res)=>{
      console.log(res)
    })
    this.productName = '';
    this.productCode = '';
    this.manufacturingDate = '';
    this.expiringDate = '';
    this.price = '';
    this.isSuccessfull=true
    setTimeout(() => {
      this.isSuccessfull=false
    }, 2000);
  }
  isSuccessfull:any=false;
}

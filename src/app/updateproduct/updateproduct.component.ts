import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  constructor(private api : ApiService) {
    
   }

  ngOnInit(): void {
  }
  productName = '';
  productCode = '';
  manufacturingDate = '';
  expiringDate = '';
  price = '';
  isUpdate:any
}

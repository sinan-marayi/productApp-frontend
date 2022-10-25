import { Component, OnInit } from '@angular/core';
import { flatMap } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css'],
})
export class ViewproductsComponent implements OnInit {
  constructor(private api: ApiService) {
    this.displayProduct();
  }

  ngOnInit(): void {}
  data: any = [];

  displayProduct = () => {
    this.api.getProduct().subscribe((res) => {
      this.data = res;
    });
  };

  deleteProduct = (id: any, name: any) => {
    let isResult: any = confirm(`Do you want to delete ${name} from the list?`);
    if (isResult) {
      const data = { _id: id };
      this.api.deleteProduct(data).subscribe((res) => {
        console.log(res);
      });
    }
    this.displayProduct();
    this.isDelete=true
    setTimeout(() => {
      this.isDelete=false
    }, 2000);
    this.deletedProduct=name
  };
  deletedProduct:any
  isDelete:any=false

  toUpdate=(id:any)=>{
    const data = id
    this.api.toUpdate(data).subscribe(res=>{
      console.log(res);
    })
  }
}

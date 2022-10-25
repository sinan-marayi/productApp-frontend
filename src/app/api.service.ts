import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getProduct=()=>{
    return this.http.get('http://localhost:3000/api/viewProducts')
  }
  addProduct=(data:any)=>{
    return this.http.post('http://localhost:3000/api/addProduct',data)
  }
  deleteProduct=(data:any)=>{
    return this.http.post('http://localhost:3000/api/deleteProduct',data)
  }
  toUpdate=(data:any)=>{
    return this.http.post('http://localhost:3000/api/toUpdate',data)
  }
}

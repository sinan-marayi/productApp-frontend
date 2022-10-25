import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';

const approutes:Routes=[
  {path:"",component:AddproductsComponent},
  {path:"viewall",component:ViewproductsComponent},
  {path:"update",component:UpdateproductComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AddproductsComponent,
    ViewproductsComponent,
    NavbarComponent,
    UpdateproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(approutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

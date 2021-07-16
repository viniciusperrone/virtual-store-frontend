import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { HeaderComponent } from './components/header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListProductsComponent } from './view/list-products/list-products.component';
import { CreateProductsComponent } from './view/create-products/create-products.component';
import { DeleteProductsComponent } from './view/delete-products/delete-products.component';
import { ShowProductsComponent } from './components/show-products/show-products.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ListProductsComponent,
    CreateProductsComponent,
    DeleteProductsComponent,
    ShowProductsComponent,
    AddProductComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

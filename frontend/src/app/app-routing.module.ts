import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { ListProductsComponent } from './view/list-products/list-products.component';
import { CreateProductsComponent } from './view/create-products/create-products.component';
import { DeleteProductsComponent } from './view/delete-products/delete-products.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'list',
    component: ListProductsComponent
  },
  {
    path: 'create-and-update',
    component: CreateProductsComponent
  },
  {
    path: 'delete',
    component: DeleteProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

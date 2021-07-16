import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {

  constructor(private service: SharedService) { }

  ProductsList: any=[];

  ngOnInit(): void {
    this.refreshProductsList();
  }

  addClick() {

  }

  refreshProductsList(){
    this.service.getProductsList().subscribe(data => {
      this.ProductsList = data;
      console.log(this.ProductsList);
    });
  }

}

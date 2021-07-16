import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input()
  // prod: any;
  ProductId?:number;
  ProductName?:string;
  ProductDescription?: string;
  ProductPrice?: number;


  ngOnInit(): void {

  }

  addProduct(){
    var val = {
      name: this.ProductName,
      description: this.ProductDescription,
      price: this.ProductPrice
    }

    this.service.addProducts(val).subscribe(res => {
      alert('Produto cadastrado com sucesso!');
    })
  }

  addUpdate(){
    var val = {
      id: this.ProductId,
      name: this.ProductName,
      description: this.ProductDescription,
      price: this.ProductPrice
    }

    console.log(val);
    this.service.updateProducts(val).subscribe(res => {
      alert('Produto atualizado com sucesso!');
    })
  }

}

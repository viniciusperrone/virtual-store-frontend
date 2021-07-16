import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-delete-products',
  templateUrl: './delete-products.component.html',
  styleUrls: ['./delete-products.component.css']
})
export class DeleteProductsComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() ActivateModal?:boolean;
  ProductId?:number;
  ModalTitle?: string;


  addClick(){
    this.ModalTitle= 'ATENÇÃO !!'
    this.ActivateModal=true;
    console.log(this.ActivateModal)
  }

  closeClick(){
    this.ActivateModal=false;
  }

  deleteProduct(){
    this.service.deleteProducts(this.ProductId).subscribe(res => {
      alert('Produto deletado com sucesso');
      this.ActivateModal=false;
    })
  }

  ngOnInit(): void {
  }

}

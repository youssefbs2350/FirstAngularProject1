import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../Services/product.service';
import { product } from '../core/models/product';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailProductComponent {
id!:number;
listProducts:product[]=[]
  constructor(private Act:ActivatedRoute,private Ps:ProductService) { }

  ngOnInit(){
    this.id=this.Act.snapshot.params['id'];
    console.log(this.id);
    this.listProducts=this.Ps.listProducts

  }

}
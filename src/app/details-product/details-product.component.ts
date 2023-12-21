import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailProductComponent {
id!:number;
  constructor(private Act:ActivatedRoute) { }

  ngOnInit(){
    this.id=this.Act.snapshot.params['id'];
    console.log(this.id);
  }


}

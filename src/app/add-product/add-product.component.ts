import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../Services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private Ps:ProductService,private route:Router){}
  registerForm!: FormGroup;

  ngOnInit(){
    this.registerForm= new FormGroup({
      id:new FormControl(),
      title: new FormControl('',[Validators.required,Validators.minLength(3)]),
      price: new FormControl('',[Validators.required,Validators.pattern('[0-9]+$')]),
      like:new FormControl('',Validators.required),
      quantity:new FormControl('',Validators.required),

    });
  }

  reset(){
    this.registerForm.reset();
  }
  ajouter(){
    this.Ps.addProduct(this.registerForm.value);
    this.route.navigateByUrl('/product');
  }

}
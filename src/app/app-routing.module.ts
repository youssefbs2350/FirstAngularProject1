import { AppartmentsComponent } from './appartement/appartement.component';
import { DetailProductComponent } from './details-product/details-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ResidenceComponent } from './residence/residence.component';
import { TestComponent } from 'src/test/test.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAppartementComponent } from './form-appartement/form-appartement.component';
import { TvComponent } from './tv/tv.component';
import { MobileComponent } from './mobile/mobile.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ShowOneProductComponent } from './show-one-product/show-one-product.component';


const routes: Routes = [
  {path:'home', component:TestComponent},
  {path:'Formappart', component:FormAppartementComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'product',component:ProductComponent},
  {path:'product/:id',component:DetailProductComponent},
  {path:'showApparts/:id',component:AppartmentsComponent},
  {path:'residence',component:ResidenceComponent},
  {path:'form',component:ReactiveFormComponent},
  {path:'tv',component:TvComponent},
  {path:'mobile',component:MobileComponent},
  {path:'add',component:AddProductComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
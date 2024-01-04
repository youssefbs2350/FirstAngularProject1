import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from '../test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { ResidenceComponent } from './residence/residence.component';
import { AppartmentsComponent } from './appartement/appartement.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { DetailsApartmentComponent } from './details-apartment/details-apartment.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DetailProductComponent } from './details-product/details-product.component';
import { navbar } from './navbar/navbar.component';
import { FormAppartementComponent } from './form-appartement/form-appartement.component';
import { TvComponent } from './tv/tv.component';
import { MobileComponent } from './mobile/mobile.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ShowOneProductComponent } from './show-one-product/show-one-product.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ProductComponent,
    ResidenceComponent,
    AppartmentsComponent,
    NotFoundComponent,
    DetailsApartmentComponent,
    FormResidenceComponent,
    ReactiveFormComponent,
    DetailProductComponent,
    navbar,
    FormAppartementComponent,
    TvComponent,
    MobileComponent,
    AddProductComponent,
    ShowOneProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
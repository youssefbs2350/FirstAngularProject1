import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from '../test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { ResidenceComponent } from './residence/residence.component';
import { AppartementComponent } from './appartement/appartement.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { DetailsApartmentComponent } from './details-apartment/details-apartment.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DetailProductComponent } from './details-product/details-product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormAppartementComponent } from './form-appartement/form-appartement.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ProductComponent,
    ResidenceComponent,
    AppartementComponent,
    NotFoundComponent,
    DetailsApartmentComponent,
    FormResidenceComponent,
    ReactiveFormComponent,
    DetailProductComponent,
    NavbarComponent,
    FormAppartementComponent
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
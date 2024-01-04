import { Component, OnInit } from '@angular/core';
import { Residence } from '../core/models/residence';
import { ApartmentService } from '../Service/apartment-service.service';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css'],
})
export class ResidenceComponent implements OnInit {
  listResidences: Residence[] = [
    { id: 1, name: 'El fel', address: 'Borj Cedria', image: '../../assets/images/R1.jpeg' },
    { id: 2, name: 'El yasmine', address: 'Ezzahra', image: '../../assets/images/R2.jpg' },
    { id: 3, name: 'El Arij', address: 'Menzah 5', image: '../../assets/images/R3.jpg' },
    { id: 4, name: 'El Anber', address: 'Manzah 5', image: '../../assets/images/R4.jpg' },
  ];

  constructor(private apartmentService: ApartmentService) {}

  ngOnInit(): void {
    const criteria = 'address';
    const value = 'Menzah 5';
    const count = this.apartmentService.getSameValueOf(this.listResidences, criteria, value);
    console.log(`Nombre d'adresses similaires : ${count}`);
  }
}


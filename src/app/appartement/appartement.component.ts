import { Component, OnInit } from '@angular/core';
import { ApartmentService } from '../Service/apartment-service.service';
import { Apartment } from '../core/models/appartement';
import { Residence } from '../core/models/residence';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appartments',
  templateUrl: './appartement.component.html',
  styleUrls: ['./appartement.component.css']
})
export class AppartmentsComponent implements OnInit {
  listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/images/R1.jpeg" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/images/R2.jpg" },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R3.jpg" },
    { id: 4, name: "El Anber", address: "Manzah 5", image: "../../assets/images/R4.jpg" }
  ];

  listApartments: Apartment[] = [
    { id: 1, appartNum: 1, floorNum: 0, surface: 100, terrace: "oui", surfaceTerrace: 20, category: "S+1", description: "AppartementS+1", residence: this.listResidences[0] },
    { id: 2, appartNum: 2, floorNum: 0, surface: 130, terrace: "non", surfaceTerrace: 0, category: "S+2", description: "AppartementS+2", residence: this.listResidences[0] },
    { id: 3, appartNum: 3, floorNum: 0, surface: 150, terrace: "oui", surfaceTerrace: 30, category: "S+3", description: "AppartementS+3", residence: this.listResidences[1] },
  ];

  list!: Apartment[];
  listFavoris: Apartment[] = [];
  id!: number;

  constructor(private act: ActivatedRoute, private apartmentService: ApartmentService) { }

  ngOnInit() {
    this.id = this.act.snapshot.params['id'];
    const residence = this.listResidences.find(res => res.id === this.id);

    if (residence) {
      this.list = this.apartmentService.getSameValueOf(this.listApartments, 'residence.address', residence.address);
    } else {
      console.error('Adresse de résidence non trouvée.');
    }
  }

  likeAppart(appart: Apartment) {
    if (!this.listFavoris.includes(appart)) {
      this.listFavoris.push(appart);
      console.log(this.listFavoris);
    }
  }

  exampleMethod() {
    const criteria = 'residenceId';
    const value = this.listResidences[0].address; 
    const filteredList = this.apartmentService.getSameValueOf(this.listApartments, criteria, value);
    console.log('Liste filtrée :', filteredList);
  }
}

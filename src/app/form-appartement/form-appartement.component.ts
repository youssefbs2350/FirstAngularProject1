import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-appartement',
  templateUrl: './form-appartement.component.html',
  styleUrls: ['./form-appartement.component.css']
})
export class FormAppartementComponent implements OnInit {
  apartForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.apartForm = this.fb.group({
      apartmentNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      floorNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      description: [''],
      surface: ['', Validators.required],
      terrace: [false],
      surfaceTerrace: [{ value: '', disabled: true }, Validators.required],
      category: ['', Validators.required],
      residence: ['', Validators.required]
    });

    const terraceControl = this.apartForm.get('terrace');
    if (terraceControl) {
      terraceControl.valueChanges.subscribe((value) => {
        const surfaceTerraceControl = this.apartForm.get('surfaceTerrace');
        if (surfaceTerraceControl) {
          if (value) {
            surfaceTerraceControl.enable();
          } else {
            surfaceTerraceControl.disable();
          }
        }
      });
    }
  }
}

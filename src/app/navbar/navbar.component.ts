import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class navbar {

  constructor(private router: Router) { }

  searchLink(query: string): void {
    const lowercaseQuery = query.toLowerCase();

    if (lowercaseQuery === 'formulaireappartement') {
      this.router.navigate(['/Formappart']);
    } else if (lowercaseQuery === 'formulaireresidence'){
      this.router.navigate(['/form'])}
      else if (lowercaseQuery === 'produit'){
        this.router.navigate(['/product'])}
        else{
          this.router.navigate(['/home'])
        
      
      console.log("La recherche n'est pas prise en charge pour le terme : " + query);
    }
  }
}

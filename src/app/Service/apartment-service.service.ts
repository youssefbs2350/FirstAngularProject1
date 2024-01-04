import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  getSameValueOf(list: any[], criteria: string, value: any): any[] {
    return list.filter(item => item[criteria] === value);
  }

}


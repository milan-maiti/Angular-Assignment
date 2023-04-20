import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  apiUrl: string = 'https://jsonplaceholder.typicode.com/';
  perPage:number = 10

  constructor() { }
}

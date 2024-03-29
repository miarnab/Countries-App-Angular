import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesApiService {
  link='https://restcountries.com/v3.1/all';
  countryLink = "https://restcountries.com/v3.1/name/";
  constructor(private http:HttpClient) {}

  getData(){
    return this.http.get(`${this.link}`);
  }

  getCountry(name:string){
    return this.http.get('${this.countryLink/${name}');
  }
}

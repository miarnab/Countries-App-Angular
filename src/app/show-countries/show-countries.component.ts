import { Component, OnInit } from '@angular/core';
import { CountriesApiService } from '../countries-api.service';
import { Observable, Subscriber } from 'rxjs';


@Component({
  selector: 'app-show-countries',
  templateUrl: './show-countries.component.html',
  styleUrls: ['./show-countries.component.css']
})

export class ShowCountriesComponent implements OnInit {
 countries: any;


  constructor(private countriesapiservice:CountriesApiService) { }

  ngOnInit(): void {
    this.countries=this.countriesapiservice.getData();
  }

  sortCountryASC(){
    this.countries.sort((a: { name: { common: string; }; },b: { name: { common: string; }; })=>a.name.common.localeCompare(b.name.common));
  }
  sortCountryDESC(){

  }
  sortPopulationASC(){

  }
  sortPopulationDESC(){

  }
}

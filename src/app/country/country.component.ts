import { Component, OnInit } from '@angular/core';
import { CountriesApiService } from '../countries-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  country:any;
  constructor(private countryService: CountriesApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const countryName = params['name'];
      this.countryService
        .getCountry(countryName)
          .subscribe(country => this.country = country)
    })
  }

}


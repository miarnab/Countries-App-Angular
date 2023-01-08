import { Component, OnInit } from '@angular/core';
import { ContinentApiService } from '../continent-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  continents: any;
  constructor(private continentapiservice: ContinentApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.continents=[
      {region: "Africa"},
      {region: "North America"},
      {region: "South America"},
      {region: "Asia"},
      {region: "Europe"},
      {region: "Oceania"}
    ];
    this.route.params.subscribe(params =>{
      const regionName= params['region'];
      this.continentapiservice
        .sendData(regionName)
          .subscribe(continents=>this.continents=continents)
    })
  }

}

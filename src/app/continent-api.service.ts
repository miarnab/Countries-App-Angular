import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContinentApiService {
  link='https://restcountries.com/v3.1/region/{region}';
  constructor(private http:HttpClient) { }

  sendData(region: string){
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(region);
    console.log(body)
    return this.http.post(`${this.link}`+{region},body,{'headers':headers});
  }
}

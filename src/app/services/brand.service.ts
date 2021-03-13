import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandResponseModel } from '../models/brand-response-model';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  
  apiUrl = 'https://localhost:44342/api/brands/getall';
  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<BrandResponseModel>{
    return this.httpClient.get<BrandResponseModel>(this.apiUrl);
  };
}


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarImages } from '../models/car-images';
import { ListResponseModel } from '../models/list-response-model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient) { }
  apiUrl = 'https://localhost:44342/api/';

  getCars():Observable<ListResponseModel<Car>>{
    let newPath= this.apiUrl + "cars/getall";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
  
    let newPath= this.apiUrl + "cars/getbybrand?brandId=" + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath= this.apiUrl + "cars/getbycolorid?colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarDetailsByCarId(carId:number):Observable<ListResponseModel<CarImages>>{
    let newPath = this.apiUrl +"carimages/getbycarid?carId" + carId
    return this.httpClient.get<ListResponseModel<CarImages>>(newPath);
  }

}

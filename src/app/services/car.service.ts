import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';
import { CarDetail } from '../models/car-detail';
import { CarImages } from '../models/car-images';
import { ListResponseModel } from '../models/list-response-model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) { }
  apiUrl = environment.apiUrl;

  getCars(): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "cars/getcardetail";
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByBrand(brandId: number): Observable<ListResponseModel<CarDetail>> {

    let newPath = this.apiUrl + "cars/getbybrand?brandId=" + brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByColor(colorId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "cars/getbycolorid?colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetailsByCarId(carId: number): Observable<ListResponseModel<CarImages>> {
    let newPath = this.apiUrl + "carimages/getbycarid?carId" + carId
    return this.httpClient.get<ListResponseModel<CarImages>>(newPath);
  }

}

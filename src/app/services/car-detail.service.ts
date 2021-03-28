import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarDetail } from '../models/car-detail';
import { ListResponseModel } from '../models/list-response-model';

@Injectable({
  providedIn: 'root',
})
export class CarDetailService {
  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getCarDetail():Observable<ListResponseModel<CarDetail>> {
    let newPath=this.apiUrl +"cars/getcardetail";
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


  getCarDetailsByCarId(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl +"cars/getcardetailbycarid?carId=" + carId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

   getCarsByColorAndBrand(colorId: number, brandId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "cars/getbycoloridandbrandid?colorId=" + colorId + '&brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

}

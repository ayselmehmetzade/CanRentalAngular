import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/car-detail';
import { ListResponseModel } from '../models/list-response-model';

@Injectable({
  providedIn: 'root',
})
export class CarDetailService {
  apiUrl = 'https://localhost:44342/api/';

  constructor(private httpClient: HttpClient) {}

  getCarDetail():Observable<ListResponseModel<CarDetail>> {
    let newPath=this.apiUrl +"cars/getcardetail";
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetailsByCarId(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl +"cars/getcardetailbycarid?carId=" + carId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

}

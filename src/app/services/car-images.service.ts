import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarImages } from '../models/car-images';
import { ListResponseModel } from '../models/list-response-model';

@Injectable({
  providedIn: 'root',
})
export class CarImagesService {
  apiUrl= environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  getCarImages() : Observable<ListResponseModel<CarImages>>{
    let newPath = this.apiUrl + "carimages/getall";
    return this.httpClient.get<ListResponseModel<CarImages>>(newPath);
  }

  getCarImagesById(carId: number) : Observable<ListResponseModel<CarImages>>{
    let newPath = this.apiUrl + "carimages/getbycarid?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarImages>>(newPath);
  } 
}


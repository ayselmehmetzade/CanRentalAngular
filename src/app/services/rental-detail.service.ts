import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/list-response-model';
import { RentalDetail } from '../models/rental-detail';

@Injectable({
  providedIn: 'root',
})
export class RentalDetailService {
  apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  getRentalDetails(): Observable<ListResponseModel<RentalDetail>> {
    return this.httpClient.get<ListResponseModel<RentalDetail>>(this.apiUrl+'rentals/getrentaldetails');
  }
}

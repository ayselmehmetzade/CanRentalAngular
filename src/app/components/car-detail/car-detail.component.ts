import { Component, OnInit } from '@angular/core';
import { CarDetail } from 'src/app/models/car-detail';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  cars: CarDetail[] = [];

  dataLoaded=false;
  constructor(private carDetailService: CarDetailService) {}

  ngOnInit(): void {
    this.getCarDetail();
  }

  getCarDetail() {
    this.carDetailService.getCarDetail().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded=true;
    });
  }
}

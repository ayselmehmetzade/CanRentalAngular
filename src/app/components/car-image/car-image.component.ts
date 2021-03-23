import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/car-detail';
import { CarImages } from 'src/app/models/car-images';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImagesService } from 'src/app/services/car-images.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.scss'],
})
export class CarImageComponent implements OnInit {
  carImage: CarImages[];
  imagePath = 'https://localhost:44342/';
  carDetail: CarDetail;

  constructor(
    private carImageService: CarImagesService,
    private activatedRoute: ActivatedRoute,
    private carDetailService: CarDetailService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){  
        this.getCarsDetail(params["carId"]);
        this.getCarsImage(params["carId"]);
      }
    })
    
  }

  getCarsImage(carId: number) {
    this.carImageService.getCarImagesById(carId).subscribe((response) => {
      this.carImage = response.data;
    });
  }

  getImagePath(image: string) {    
    return this.imagePath + image;
  }

  getCarsDetail(carId: number) {
    
    this.carDetailService.getCarDetailsByCarId(carId).subscribe((response) => {
   
      this.carDetail = response.data[0];
     
    });
  }
}

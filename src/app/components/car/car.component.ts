import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImages } from 'src/app/models/car-images';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImagesService } from 'src/app/services/car-images.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent implements OnInit {
  cars: Car[]=[];
  carImage: CarImages[]=[];
  
  constructor(private carService: CarService,private carDetailService: CarDetailService, private activatedRoute: ActivatedRoute, private carImageService: CarImagesService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrand(params.brandId);
      } else if(params['colorId']){
        this.getCarsByColor(params.colorId);
      }
      else {
        this.getCars();
      }
    });
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }

  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
    });
  }

  getCarsByColor(colorId: number){
    this.carService.getCarsByColor(colorId).subscribe(response =>{
      this.cars=response.data;
    })
  }
  getCarImage(carId:number){
    this.carImageService.getCarImagesById(carId).subscribe(reponse=>{
      this.carImage =reponse.data;
    })
  }
  getCarDetailByCarId(carId:number){
    
    this.carService.getCarDetailsByCarId(carId).subscribe(response=>{
      this.carImage=response.data;
    })
  
  }
  
}

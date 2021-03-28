import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { CarDetail } from 'src/app/models/car-detail';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  cars: CarDetail[] = [];
  colors: Color[] = [];
  brands: Brand[] = [];
  brandId: number = 0;
  colorId: number = 0;


  constructor(
    private carDetailService: CarDetailService,
    private activatedRoute: ActivatedRoute,
    private carService: CarService,
    private colorService: ColorService,
    private brandService: BrandService) { }

  ngOnInit(): void {
    this.getCarDetail();
    this.getColor();
    this.getBrand();
  }

  getCarDetail() {
    this.carDetailService.getCarDetail().subscribe((response) => {
      this.cars = response.data;
    });
  }

  getColor() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }
  getBrand() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }
  getCarsByColor(colorId: number) {
    this.carService.getCarsByColor(colorId).subscribe((response) => {
      this.cars = response.data;
    });
  }
  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
    });
  }
  getCarsByColorAndBrand(colorId: number, brandId: number) {
    this.carDetailService.getCarsByColorAndBrand(colorId, brandId).subscribe(response => {
      this.cars = response.data;
    })
  }

  filter() {
    if (this.colorId != 0 && this.brandId != 0) {
      this.getCarsByColorAndBrand(this.colorId, this.brandId);
    }
    else if (this.colorId != 0) {
      this.getCarsByColor(this.colorId);
    }
    else if (this.brandId != 0) {
      this.getCarsByBrand(this.brandId);
    }
    else {
      this.getCarDetail();
    }
  }

}

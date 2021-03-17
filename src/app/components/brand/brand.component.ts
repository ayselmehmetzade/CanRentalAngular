import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss'],
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  // dataLoaded = false;
  currentBrand: Brand | null;
  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      // this.dataLoaded = true;
    });
  }

  setCurrentBrand(brand: Brand) {
    this.currentBrand = brand;
  }

  getCurrentBrandClass(brand:Brand){
    if(brand==this.currentBrand){
      return "list-group-item list-group-item-danger"
    }
    else{
      return "list-group-item"
    }
  }

  setAllBrand(){
    this.currentBrand=null;
  }
  getAllBrandClass(){
    if(!this.currentBrand){
      return "list-group-item list-group-item-danger"
    }
    else{
      return "list-group-item"
    }
  }
}

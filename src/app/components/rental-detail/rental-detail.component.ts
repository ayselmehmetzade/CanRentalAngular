import { Component, OnInit } from '@angular/core';
import { RentalDetail } from 'src/app/models/rental-detail';
import { RentalDetailService } from 'src/app/services/rental-detail.service';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss'],
})
export class RentalDetailComponent implements OnInit {
  rentals: RentalDetail[] = [];
  dataLoaded = false;
  constructor(private rentalDetailService: RentalDetailService) {}

  ngOnInit(): void {
    this.getRentalDetails();
  }

  getRentalDetails() {
    this.rentalDetailService.getRentalDetails().subscribe((response) => {
      this.rentals = response.data;
      this.rentals.forEach((x) => {
        x.rentDate = new Date(x.rentDate).toLocaleDateString();
      });
      this.dataLoaded = true;
    });
  }
}

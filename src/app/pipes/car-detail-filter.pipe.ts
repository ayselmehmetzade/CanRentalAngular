import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';
import { CarDetail } from '../models/car-detail';

@Pipe({
  name: 'carDetailFilter',
})
export class CarDetailFilterPipe implements PipeTransform {
  transform(value: CarDetail[], carDetailFilterText: string): CarDetail[] {
    carDetailFilterText ? carDetailFilterText.toLocaleLowerCase() : '';
    return carDetailFilterText
      ? value.filter(
        (c: CarDetail) =>
          c.carId.toString().toLocaleLowerCase().indexOf(carDetailFilterText) !== -1 ||
          c.colorId
            .toString()
            .toLocaleLowerCase()
            .indexOf(carDetailFilterText) !== -1 ||
          c.modelYear.toLocaleLowerCase().indexOf(carDetailFilterText) !== -1 ||
          c.brandId
            .toString()
            .toLocaleLowerCase()
            .indexOf(carDetailFilterText) !== -1 ||
          c.dailyPrice
            .toString()
            .toLocaleLowerCase()
            .indexOf(carDetailFilterText) !== -1 ||
          c.description.toLocaleLowerCase().indexOf(carDetailFilterText) !== -1
      )
      : value;
  }
}

export interface RentalDetail {
  id: number;
  carId: number;
  userId: number;
  customerId: number;
  description: string;
  brandName: string;
  colorName: string;
  userName: string;
  rentDate: Date;
  returnDate: Date;
}

import { RentalDetail } from "./rental-detail";
import { ResponseModel } from "./response-model";

export interface RentalDetailResponseModel extends ResponseModel {
  data:RentalDetail[];
}

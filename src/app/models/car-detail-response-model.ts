import { CarDetail } from "./car-detail";
import { ResponseModel } from "./response-model";

export interface CarDetailResponseModel extends ResponseModel {
    data: CarDetail[];
   
}

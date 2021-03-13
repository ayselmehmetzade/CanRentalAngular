import { Customer } from "./customer";
import { ResponseModel } from "./response-model";

export interface CustomerResponseModel extends ResponseModel{
    data:Customer[];
}

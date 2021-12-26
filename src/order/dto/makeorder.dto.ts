import { IsNumber, IsString } from "class-validator";

export class MakeOrderDto{
    @IsNumber()
    productIdx: number;

    @IsNumber()
    quentity: number;

}
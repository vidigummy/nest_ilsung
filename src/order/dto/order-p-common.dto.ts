import { IsString, Matches, MaxLength, MinLength, IsEmail, IsNumber, IsDate } from "class-validator";

export class OrderPCommonDtd{
    @IsNumber()
    idx: number;
    @IsNumber()
    productIdx: number;

    @IsNumber()
    order_sheet_idx: number;

    @IsNumber()
    quentity: number;

    @IsDate()
    insert_time: Date;

    @IsDate()
    update_time: Date;
}
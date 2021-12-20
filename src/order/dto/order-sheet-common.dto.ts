import { IsString, Matches, MaxLength, MinLength, IsEmail, IsNumber, IsDate } from "class-validator";

export default class OrderSeetCommonDto{
    @IsNumber()
    idx: number;

    @IsNumber()
    user_idx: number;

    @IsDate()
    insert_time: Date;

    @IsDate()
    update_time: Date;
}
import { IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreateBoardDto{
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    title: string;

    @IsString()
    @MinLength(3)
    @MaxLength(3000)
    full_txt: string;

    // @IsNumber()
    // userIdx: number;
}
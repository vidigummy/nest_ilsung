import { IsString, Matches, MaxLength, MinLength, IsEmail } from "class-validator";

export class AuthCredentialsDto {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    user_id: string;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    //영어랑 숫자만 가능한 유효성 체크
    @Matches(/^[a-zA-Z0-9]*$/, {
        message: 'password only accepts english and number'
    })
    user_passwd: string;

    @IsString()
    phone_number: string;

    @IsString()
    address:string;

    @IsString()
    @IsEmail()
    email:string;

    
}
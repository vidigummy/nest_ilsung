export class CreateUserDto{

    readonly user_id : string;
    readonly passwd : string;
    readonly phone_number: string;
    readonly address: string;
    readonly email: string;
    readonly insert_time : Date;
    readonly update_time : Date;
    readonly user_level : number;
}


import { Injectable } from '@nestjs/common';
import { Body } from '@nestjs/common';
@Injectable()
export class AppService {
  getHello(): string {
    return "<a href='/sign_in'>aaa</a>";
  }

  sign_in(): string{
    return 'yello';
  }

  // async create(@Body() userData: CreateUserDto): Promise<User>{
  //   const {user_id, passwd, phone_number, address, email } = userData;
  //   const user = new User();
  //   user.user_id = user_id;
  //   user.user_level = 0;
  //   user.user_passwd = passwd;
  //   user.phone_number = phone_number;
  //   user.address = address;
  //   user.email = email;
  //   user.update_time= new Date();
  //   user.insert_time= new Date();
  //   return user;
  // }
}

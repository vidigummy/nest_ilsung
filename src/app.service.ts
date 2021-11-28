import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'yaho';
  }

  sign_in(): string{
    return 'yello';
  }
}

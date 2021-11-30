import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    getAll(): string{
        return "product";
    }
}

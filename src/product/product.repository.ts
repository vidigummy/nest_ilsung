import { EntityRepository, Repository } from "typeorm";
import { Product } from "./product.entity";
import {SelectProductDto} from "./dto/selectProductDto"
@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
    async showProduct(selectProductDto: SelectProductDto):Promise<any>{
        

    }
    
}
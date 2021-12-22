import { ViewColumn, ViewEntity } from "typeorm";


@ViewEntity({
    expression: `
    SELECT “*” FROM 
        (SELECT “uoo”.”orderIdx”, “uoo”.”userIdx”, ”uoo”.”productIdx”, ”product”.”product_name”, ”uoo”.”quentity”, ”uoo”.”insert_time”
             FROM  (SELECT ”order_user”.”orderIdx”, ”order_user”.”userIdx”, ”order_user”.”insert_time”, ”order_p”.”idx” AS ”orderPIdx”, ”order_p”.”productIdx”, ”order_p”.”quentity”
                 FROM (SELECT ”order_sheet”.”idx” AS ”orderIdx”, ”user”.”idx” AS ”userIdx”, ”order_sheet”.”insert_time” AS ”insert_time” 
                    FROM ”order_sheet” JOIN ”user” ON ”order_sheet”.”userIdx” = ”user”.”idx”) AS ”order_user”
                     JOIN ”order_p” ON ”order_user”.”orderIdx” = ”order_p”.”orderIdx”) AS ”uoo”
                      JOIN ”product” ON ”product”.”idx” = ”uoo”.”productIdx”)
                       AS ”order_sheet_adm”
                       `
})

export class OrderSheetAdm{
    @ViewColumn()
    orderIdx: number;

    @ViewColumn()
    userIdx: number;

    @ViewColumn()
    productIdx: number;

    @ViewColumn()
    product_name: string;

    @ViewColumn()
    quentity: number;

    @ViewColumn()
    insert_time: Date;
}
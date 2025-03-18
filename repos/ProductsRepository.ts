import { Pool } from "pg"
import { Database } from "./Database";
import { Products } from "../entity/Products";

export class ProductsRepository {

    private pool : Pool;

    constructor() {
        this.pool = Database.StartConection();
    }

    async listProducts() : Promise<Products[]> {

        const query = "Select * from Schema1.products";
        const result = await this.pool.query(query);

        console.table(result);

        let listOfProducts : Products[] = [];

        for(const row of result.rows) {
            const product = new Products(row.idProducts, row.nameProducts, row.priceProducts, row.platformProducts);
            listOfProducts.push(product);
        }

        return listOfProducts;

    }

    async searchForID(id : number) : Promise<Products[]> {

        const query = "Select * from schema1.products where ID = $1"
        const result = await this.pool.query(query);

        const listOfProducts : Products[] = [];

        for(const row of result.rows) {
            const product = new Products(row.idProducts, row.nameProducts, row.priceProducts, row.platformProducts)
            listOfProducts.push(product);
        }

        return listOfProducts;

    }

    async insertProducts(id_products : number, name_products : string, price_products : number, platform_products : string) { 

        const query = "Insert into Schema1.products (id_products, name_products, price_products, platform_products) values($1,$2,$3,$4)"
        await this.pool.query(query[id_products, name_products])
    }

}

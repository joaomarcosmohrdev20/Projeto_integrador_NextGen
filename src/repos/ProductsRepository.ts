import { Pool } from "pg"
import { Database } from "./Database";
import { Products } from "../entity/Products";

export class ProductsRepository {

    private pool : Pool;

    constructor() {
        this.pool = Database.startConection();
    }
}

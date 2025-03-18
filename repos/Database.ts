import { Pool } from "pg";

export class Database {

    static pool : Pool

    static StartConection() : Pool {

        this.pool = new Pool ({
            user: "postegres",
            password: "1234",
            host: "localhost",
            database: "nextgen",
            port: 5432
        })

        return this.pool

    }

}
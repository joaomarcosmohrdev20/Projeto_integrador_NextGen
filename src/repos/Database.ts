import { Pool } from "pg";

export class Database {

    static pool : Pool;

    static startConection() : Pool {

        this.pool = new Pool ({
            user: "postgres",
            password: "1234",
            host: "localhost",
            database: "next gen",
            port: 5432
        });

        return this.pool;

    }

}
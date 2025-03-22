import { Pool } from "pg"
import { Database } from "./Database";
import { User } from "../entity/User";

export class UserRepository { 
    private pool : Pool

    constructor() {
        this.pool = Database.startConection();
    }
}
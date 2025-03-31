import { Pool, Query } from "pg"
import { Database } from "./Database";
import { User } from "../entity/User";
import { StaffService } from "../service/StaffService";

export class UserRepository { 
    private pool : Pool;

    constructor() {
        this.pool = Database.startConection();
    }

    async loginCustomer(user_nickname : string, user_email : string, user_password : string) : Promise<User | null> {
        let query = "Select * from Schema1.users where user_nickname = $1 and user_email = $2 and user_password = $3";
        let result = await this.pool.query(query,[user_nickname, user_email, user_password]);

        let row = result.rows[0];

        if(result.rows.length == 0)
        {
            return null;
        }

        const user = new User(row.user_id, row.user_realname, row.user_nickname, row.user_email, row.user_password);

        return user;
    }

    public async searchCustomersForID(user_id : number) {
        let query = "SELECT * FROM Schema1.users WHERE user_id = $1";
        let result = await this.pool.query(query,[user_id]);

        const listOfUsers: User[] = [];

        for(const row of result.rows){
            const user = new User(row.user_id, row.user_realname, row.user_nickname, row.user_email, row.user_password);
            listOfUsers.push(user);            
        }            

        return listOfUsers;
    }   
      
    public async createAccount(user_realname : string, user_nickname : string, user_email : string, user_password : string){
        console.log("Cliente cadastrado com sucesso!");
        let query = "INSERT INTO Schema1.users (user_realname, user_nickname, user_email, user_password) VALUES ($1,$2,$3,$4)";
        await this.pool.query(query,[user_realname, user_nickname, user_email, user_password]);     
    }
}
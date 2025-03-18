import { Pool } from "pg"
import { Database } from "./Database";
import { User } from "../entity/User";

export class UserRepository { 
    private pool : Pool

    constructor() {
        this.pool = Database.StartConection();
    }

    async listUsers() : Promise<User[]> {

        const query = 'SELECT * FROM  Schema1.users'
        const result = await this.pool.query(query)

        console.log(result)

        let listOfUsers : User[] = []     

        for(const row of result.rows){
            const user = new User(row.id_User, row.name_User, row.nick_User, row.email_User, row.password_User);
            listOfUsers.push(user);            
        }             
        return listOfUsers;
    }

    public async searchForID(id: number):Promise<User[]>{
        let query = "SELECT * FROM Schema1.users WHERE ID = $1"
        let result = await this.pool.query(query,[id])

        const listaOfUsers: User[] = [];

        for(const row of result.rows){
            const user = new User(row.id_User, row.name_User, row.nick_User, row.email_User, row.password_User);
            listaOfUsers.push(user);            
        }            

        return listaOfUsers;
    }   

    public async insertCustomers(name_User : string, nick_User : string, email_User : string, password_User : string, id_User : number){
        console.log("Vou inserir e já volto aí. ");
        let query = "INSERT INTO Schema1.users (user_realname, user_nickname, user_email, user_password, user_id) VALUES ($1,$2,$3,$4,$5)"
        await this.pool.query(query,[name_User, nick_User, email_User, password_User, id_User]);     

    }
}
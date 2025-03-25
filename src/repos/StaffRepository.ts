import { Pool } from "pg"
import { Database } from "./Database";
import { User } from "../entity/User";
import { Products } from "../entity/Products";

export class StaffRepository { 
    private pool : Pool;

    constructor() {
        this.pool = Database.startConection();
    }

    //#region Customers
    async listCustomers() : Promise<User[]> {
        const query = "Select * from Schema1.users";
        const result = await this.pool.query(query);

        let listOfUsers : User[] = [];
        
        for(const row of result.rows){
            const user = new User(row.user_id, row.user_realname, row.user_nickname, row.user_email, row.user_password);
            listOfUsers.push(user);            
        }             

        return listOfUsers;
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
    
    public async insertCustomers(user_realname : string, user_nickname : string, user_email : string, user_password : string){
        console.log("Cliente cadastrado com sucesso!");
        let query = "INSERT INTO Schema1.users (user_realname, user_nickname, user_email, user_password) VALUES ($1,$2,$3,$4)";
        await this.pool.query(query,[user_realname, user_nickname, user_email, user_password]);     
    }

    public async deleteCustomers(user_id: number) {
        let query = "Delete from Schema1.users where user_id = $1"
        await this.pool.query(query,[user_id]);
    }

    //#endregion 

    //#region Products

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
    
        async searchProductsForID(id : number) : Promise<Products[]> {
    
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
            await this.pool.query(query,[id_products, name_products, price_products, platform_products])
        }
    //#endregion

}
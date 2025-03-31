import { User } from "../entity/User"
import { UserRepository } from "../repos/UserRepository"


export class UserService {
    private userRepo : UserRepository

    constructor() {
        this.userRepo = new UserRepository()    
    }

    public toValidateEmail(user_email): void {
        const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(user_email)) {
          throw new Error("E-mail inválido.");
        }
    }

    public async toSearchCustomerForID(user_id) : Promise<User[]> {
        let list : User[] = [];

        list = await this.userRepo.searchCustomersForID(user_id);
        
        return list;
    }   

    public async toCreateAccount(user_realname : string, user_nickname : string, user_email : string, user_password : string) {
        this.toValidateEmail(user_email);

        await this.userRepo.createAccount(user_realname, user_nickname, user_email, user_password);
    }


    async toLoginCustomer(user_nickname : string, user_email : string, user_password : string) {
        const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(user_email)) {
          throw new Error("E-mail inválido.");
        }

        const user = (await this.userRepo.loginCustomer(user_nickname, user_email, user_password));

        if(user)
        {
            console.log("Logado!")
        }

        else
        {
            console.log("Erro de login!");
        }

    }

}
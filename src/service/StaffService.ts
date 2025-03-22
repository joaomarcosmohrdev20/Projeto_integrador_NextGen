import { User } from "../entity/User";
import { StaffRepository } from "../repos/StaffRepository";

export class StaffService {

    private staffRepo : StaffRepository;

    constructor() {
        this.staffRepo = new StaffRepository()
}
    
    public toValidateEmail(user_email): void {
        const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(user_email)) {
          throw new Error("E-mail inválido.");
        }
    }

    public async toListCustomer() : Promise<User[]> {
        return await this.staffRepo.listCustomers();
    }

    public async toSearchCustomerForID(user_id) : Promise<User[]> {
        let list : User[] = [];

        list = await this.staffRepo.searchCustomersForID(user_id);
        
        return list;
    }   

    public async toInsertCustomers(user_realname : string, user_nickname : string, user_email : string, user_password : string) {
        this.toValidateEmail(user_email);

        await this.staffRepo.insertCustomers(user_realname, user_nickname, user_email, user_password);
    }

    public async toDeleteCustomers(user_id) {
        return this.staffRepo.deleteCustomers(user_id);
    }

}
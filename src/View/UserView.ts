import { UserService } from "../service/UserService";
import promptSync from 'prompt-sync'

export class UserView {

    private userService : UserService;
    private prompt : promptSync;

    constructor() {
        this.userService = new UserService();
        this.prompt = promptSync();
    }

    async userMenu() {
    console.log("   ");
    console.log("   ");
    console.log("   ");

    let choiceUser = this.prompt("Insert 1 to login, insert 2 to create a Next Gen account:  ")

    switch (choiceUser) {
    
        case "1":
        let nicknameCustomer = this.prompt("What is your nickname?  ");
        let emailCustomer = this.prompt("What is your e-mail address?  ");
        let passwordCustomer = this.prompt("What is your password?  ");

        await this.userService.toLoginCustomer(nicknameCustomer, emailCustomer, passwordCustomer);
        break;

        default:
        console.log("Invalidate key.  ");
        break;
    }
}

}
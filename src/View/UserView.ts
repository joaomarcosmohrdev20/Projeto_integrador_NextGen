import { UserService } from "../service/UserService";
import promptSync from 'prompt-sync'

export class UserView {

    private userService : UserService;
    private prompt : promptSync;

    constructor() {
        this.userService = new UserService();
        this.prompt = promptSync();
    }

    async loginCustomerView() {
        console.log("Bem-vindo à Next Gen!")
        let nicknameCustomer = this.prompt("Qual o seu nome de usuário?  ");
        let emailCustomer = this.prompt("Qual o seu e-mail?  ");
        let passwordCustomer = this.prompt("Qual a sua senha?  ");

        await this.userService.toLoginCustomer(nicknameCustomer, emailCustomer, passwordCustomer);

        
    }

}
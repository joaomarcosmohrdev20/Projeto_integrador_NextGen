import { UserService } from "../service/UserService";
import promptSync from 'prompt-sync'

export class UserView {

    private userService : UserService;
    private prompt : promptSync;

    constructor() {
        this.userService = new UserService();
        this.prompt = promptSync();
    }

    async controlMenuCustomer() {

    let choiceCustomer = this.prompt("Bem-vindo à Next Gen! Digite 1 criar sua conta Next Gen, digite 2 para fazer login caso já tenha conta Next Gen, digite 3 para pesquisar um usuário:  ");

    switch (choiceCustomer) {
        case "1":
            this.userService.toCreateAccount(toCruser_realname, user_nickname, user_email, user_password)
            break;
    
        default:
            break;
    }
}
}
import { UserService } from "../service/UserService";
import promptSync from 'prompt-sync'

export class UserView {

    private userService : UserService
    private prompt : promptSync

    constructor() {
        this.userService = new UserService();
        this.prompt = promptSync();
    }
  
    toChoice() {
       let choice = this.prompt( "Bem-vindo à loja Next Gen ")

       switch (choice) {

        case "0":
            console.log("Você apertou a tecla zero");

        case "1":
            this.userService.listarClientes();
            break;

        case "2":
            let askForId = parseFloat("Qual id deseja pesquisar? ");
            this.userService.buscarPorId(askForId);
            break;

        case "3":
            let idForInsert = parseFloat("Qual é o id do novo cliente? ")
            let nameForInsert = this.prompt("Qual o nome real do novo cliente? ");
            let nickForInsert = this.prompt("Qual o nickname do novo cliente? ");
            let emailForInsert = this.prompt("Qual o email do novo usuário? ");
            let passwordForInsert = this.prompt("Qual a senha do novo usuário? ");

            this.userService.insertCustomers(idForInsert, nameForInsert, nickForInsert, emailForInsert, passwordForInsert);
            break;

        default:
            console.log("Número inválido, tente novamente  ");
            this.toChoice();
            break;
       }
    }
}
import { StaffService } from "../service/StaffService";
import promptSync  from 'prompt-sync' 

export class StaffView { 
    private staffService : StaffService;
    private prompt : promptSync 

    constructor() {
        this.prompt = promptSync();
        this.staffService = new StaffService();
    }

    async controlMenu() {
        console.log("Bem-vindo à Next Gen!")
        let choiceStaff = this.prompt("Digite 1 para listar todos os clientes atuais, digite 2 para buscar qualquer cliente pelo ID do cliente, digite 3 para cadastrar novos clientes no banco de dados, digite 4 para deletar clientes do banco de dados  ");

        switch (choiceStaff) {

            case "0":
                this.controlMenu();
                break;

            case "1":
            //To list customers OPÇÃO 1
                console.table(await this.staffService.toListCustomer());
                await this.controlMenu();
                break;
            case "2": 
            //To Search for ID customers OPÇÃO 2
                let idCustomer = this.prompt("Qual o ID do cliente?  ");
                console.table(await this.staffService.toSearchCustomerForID(idCustomer));
                break;

            case "3":
            //To insert customers OPÇÃO 3
                let insertRealNameCustomer = this.prompt("Qual o nome real do cliente?  ");
                let insertNickNameCustomer = this.prompt("Qual o apelido do cliente?  ");
                let insertEmailCustomer = this.prompt("Qual o e-mail do cliente?  ");
                let insertPasswordCustomer = this.prompt("Qual a senha da conta do cliente?  ");
                this.staffService.toValidateEmail(insertEmailCustomer);
                await this.staffService.toInsertCustomers(insertRealNameCustomer, insertNickNameCustomer, insertEmailCustomer, insertPasswordCustomer);  
                console.table(await this.staffService.toListCustomer());
                await this.controlMenu();  
                break;

            case "4":
            //To Delete customers OPÇÃO 4
                console.table(await this.staffService.toListCustomer());
                let deletIDCustomer = this.prompt("Digite o ID do cliente que deseja deletar do banco de dados:  ");
                await this.staffService.toDeleteCustomers(deletIDCustomer);
                console.table(await this.staffService.toListCustomer());
                await this.controlMenu();
                break;
            
            default:
                console.log("Tecla inválida.");
                await this.controlMenu();
                break;
        }
    }
}
import { StaffService } from "../service/StaffService";
import { InitialMenuView } from "./InitialMenuView";
import promptSync  from 'prompt-sync' 

export class StaffView { 
    private staffService : StaffService;
    private prompt : promptSync
    private initialView : InitialMenuView;

    constructor() {
        this.prompt = promptSync();
        this.staffService = new StaffService();
        this.initialView = new InitialMenuView();
    }

    async staffMenu() {
        console.log("   ");
        console.log("   ");
        console.log("   ");

        let choiceStaff = this.prompt("Insert 0 to exit to initial menu, insert 1 to list all current customers, insert 2 to search any customer for ID, insert 3 to register a new customer in the database, insert 4 to delete a customer of the database:  ");

        switch (choiceStaff) {

            case "0":
                this.initialView.initialMenu();
                break;

            case "1":
            //To list customers OPÇÃO 1
                console.table(await this.staffService.toListCustomer());
                await this.staffMenu();
                break;
            case "2": 
            //To Search for ID customers OPÇÃO 2
                let idCustomer = this.prompt("What is the customer's ID?  ");
                console.table(await this.staffService.toSearchCustomerForID(idCustomer));
                await this.staffMenu();
                break;

            case "3":
            //To insert customers OPÇÃO 3
                let insertRealNameCustomer = this.prompt("What is the customer's real name?  ");
                let insertNickNameCustomer = this.prompt("What is the customer's nick name?  ");
                let insertEmailCustomer = this.prompt("What is the customer's e-mail address?  ");
                let insertPasswordCustomer = this.prompt("What if the customer's account password?  ");
                this.staffService.toValidateEmail(insertEmailCustomer);
                await this.staffService.toInsertCustomers(insertRealNameCustomer, insertNickNameCustomer, insertEmailCustomer, insertPasswordCustomer);  
                console.table(await this.staffService.toListCustomer());
                await this.staffMenu();  
                break;

            case "4":
            //To Delete customers OPÇÃO 4
                console.table(await this.staffService.toListCustomer());
                let deletIDCustomer = this.prompt("Insert the ID of the customer who you want to delete:  ");
                await this.staffService.toDeleteCustomers(deletIDCustomer);
                console.table(await this.staffService.toListCustomer());
                await this.staffMenu();
                break;
            
            default:
                console.log("Invalidate key.");
                await this.staffMenu();
                break;
        }
    }
}
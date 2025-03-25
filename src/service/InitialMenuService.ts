import promptSync from 'prompt-sync';
import { StaffView } from "../View/StaffView";
import { UserView } from '../View/UserView';

export class InitialMenu {
    private staff : StaffView;
    private user : UserView;

static initialMenuChoice() {
let initialMenuChoice = prompt("Are you...?  ");

switch (initialMenuChoice) {
    case "0":
        staff.controlMenu();
        break;
    case "1":
        this.user.loginCustomerView();
    default:
        console.log("Invalid option.");
        break;
}
}
}
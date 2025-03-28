import { StaffView } from "./StaffView"; 
import { UserView } from "./UserView";
import promptSync  from 'prompt-sync' 

export class InitialMenuView { 
    private staffView : StaffView;
    private userView : UserView;

    private prompt : promptSync 

    constructor() {
        this.prompt = promptSync();
        //this.staffView = new StaffView();
        this.userView = new UserView()
    }

    async initialMenu() {
        console.log("Welcome to Next Gen!")
        let choice = this.prompt("Insert 1 if you are a staff or insert 2 if you are a customer:  ");

        switch (choice) {

            case "1":
                this.staffView.staffMenu();
                break;

            case "2": 
                this.userView.userMenu();
                break;
        }
    }
}
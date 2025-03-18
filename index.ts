import { UserService } from "./service/UserService";
import { UserView } from "./View/UserView";

const servico = new UserService();
const views = new UserView();

teste()

async function teste() {
  views.toChoice();
}

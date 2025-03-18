import { User } from "../entity/User"
import { UserRepository } from "../repos/UserRepository"


export class UserService {
    private repo : UserRepository

    constructor() {
        this.repo = new UserRepository()    
    }

    private validarEmail(email: string): void {
        const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          throw new Error("E-mail inválido.");
        }
      }
    
      public async listarClientes(): Promise<User[]> {
        // console.table(this.repo.listarClientes())   
        return await this.repo.listUsers()
      }
    
      public async buscarPorId(id: number): Promise<User[]> {
        let lista: User[] = [];
        lista = await this.repo.searchForID(id);
    
        if (lista.length == 0) {
          // console.log("Não Encontrei")
          throw new Error('Não Encontrei');
        }
    
        return lista;
    
      }
    
      public async insertCustomers(id_User : number, name_User : string, nick_User : string, email_User : string, password_User : string) {
        // Validação do e-mail
        this.validarEmail(email_User);
    
        await this.repo.insertCustomers(name_User, nick_User, email_User, password_User, id_User);
    
      }
    
    
    }
/*

|Usuario|

- id_User: number
- name_User: string
- email_User: string
- password_User: string

---

+ makeRegister(): void
+ doLogin(): void
*/

export class User {
    private id_User: number;
    private name_User: string;
    private nick_User: string;
    private email_User: string;
    private password_User: string;

    constructor(id_User: number, name_User: string, nick_User: string, email_User: string, password_User: string) {
        this.id_User = id_User;
        this.name_User = name_User;
        this.nick_User = nick_User;
        this.email_User = email_User;
        this.password_User = password_User;
    }

    public getIdUser(id_User) {
        return this.id_User
    }
}
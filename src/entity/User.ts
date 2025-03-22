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
    private user_id: number;
    private user_realname: string;
    private user_nickname: string;
    private user_email: string;
    private user_password: string;

    constructor(user_id : number, user_realname : string, user_nickname : string, user_email : string, user_password : string) {
        this.user_id = user_id;
        this.user_realname = user_realname;
        this.user_nickname = user_nickname;
        this.user_email = user_email;
        this.user_password = user_password;
    }

    public getIdUser(user_id) {
        return this.user_id;
    }
}
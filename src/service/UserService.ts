import { User } from "../entity/User"
import { UserRepository } from "../repos/UserRepository"


export class UserService {
    private userRepo : UserRepository

    constructor() {
        this.userRepo = new UserRepository()    
    }
    }
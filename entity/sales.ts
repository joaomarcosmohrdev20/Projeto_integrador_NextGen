export class Sales {
    private id : number
    private name : string
    private price : number
    private platform : string

    constructor(id : number, name : string, price : number, platform : string) {
        this.id = id
        this.name = name
        this.price = price
        this.platform = platform
    }
}
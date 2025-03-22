export class Products {

    private idProducts : number;
    private nameProducts : string;
    private priceProducts : number;
    private platformProducts : string;

    constructor (idProducts : number, nameProducts : string, priceProducts : number, platformProducts : string) {

        this.idProducts = idProducts;
        this.nameProducts = nameProducts;
        this.priceProducts = priceProducts;
        this.platformProducts = platformProducts;
    }
}
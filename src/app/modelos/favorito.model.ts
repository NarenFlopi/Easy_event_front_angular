export class Favorito {
    id?:number;
    producto_id: number;
    user_id: number;

    constructor(id:number, producto_id: number, user_id: number) {
        this.id = id;
        this.producto_id = producto_id;
        this.user_id = user_id;

    }
}

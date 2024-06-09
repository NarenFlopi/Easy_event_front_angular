export class Categoria {
    id:number;
    alquiler_id: number;
    producto_id: number;

    constructor(id:number, alquiler_id: number, producto_id: number) {
        this.id = id;
        this.alquiler_id = alquiler_id;
        this.producto_id = producto_id;

    }
}
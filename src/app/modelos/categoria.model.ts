export class Categoria {
    id?:number;
    nombre: string | null | undefined;


    constructor(id:number, nombre: string) {
        this.id = id;
        this.nombre = nombre;
    }
}
export class Categoria {
    id:number;
    user_id: number;
    metodo_pago: string | null | undefined;
    lugar_entrega: string | null | undefined;
    fecha_alquiler: string | null | undefined;
    fecha_devolucion: string | null | undefined;
    estado: string | null | undefined;

    constructor(id:number, user_id: number, metodo_pago: string, lugar_entrega: string, fecha_alquiler: string, fecha_devolucion: string, estado: string) {
        this.id = id;
        this.user_id = user_id;
        this.metodo_pago = metodo_pago;
        this.lugar_entrega = lugar_entrega;
        this.fecha_alquiler = fecha_alquiler;
        this.fecha_devolucion = fecha_devolucion;
        this.estado = estado;

    }
}
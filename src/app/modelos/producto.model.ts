export class Producto {

    id?: number;
    codigo: number;
    precio: number;
    nombre_producto: string | null | undefined;
    descripcion: string | null | undefined;
    cantidad_disponible: number;
    cantidad_inventario: number;
    categoria_id: number;
    empresa_id: number;
    foto: string | null | undefined;

    constructor(id: number, codigo: number, precio: number, nombre_producto: string | null | undefined, descripcion: string | null | undefined, cantidad_disponible: number, cantidad_inventario: number, categoria_id: number, empresa_id: number, foto: string | null | undefined) {
        
        this.id = id;
        this.codigo = codigo;
        this.precio = precio;
        this.nombre_producto = nombre_producto;
        this.descripcion = descripcion;
        this.cantidad_disponible = cantidad_disponible;
        this.cantidad_inventario = cantidad_inventario;  
        this.categoria_id = categoria_id;
        this.empresa_id = empresa_id;  
        this.foto = foto;
    }
}
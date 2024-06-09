export class User {
    id:number;
    rol_id: number;
    cedula: number;
    nombre:string | null | undefined;
    apellido:string | null | undefined;
    email: string | null | undefined;
    fecha_nacimiento: string | null | undefined;
    telefono: number;
    estado: string | null | undefined;
    foto: string | null | undefined;
    password: string | null | undefined;

    constructor(id:number, rol_id:number, cedula:number, nombre:string, apellido:string, email:string, fecha_nacimiento:string, telefono:number, estado:string, foto:string, password:string,) {
        this.id = id;
        this.rol_id = rol_id;
        this.cedula = cedula;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.fecha_nacimiento = fecha_nacimiento;
        this.telefono = telefono;
        this.estado = estado;
        this.foto = foto;
        this.password = password;

    }
}


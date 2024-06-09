export class Empresa {

    id?: number;
    nit_empresa: number;
    direccion_empresa: string | null | undefined;
    nombre_empresa: string | null | undefined;
    telefono_empresa: number;
    email_empresa: string | null | undefined;
    user_id: number;


    constructor(id: number, nit_empresa: number, direccion_empresa: string, nombre_empresa: string, telefono_empresa: number, email_empresa: string, user_id: number) {
        
        this.id=id;
        this.nit_empresa=nit_empresa;
        this.direccion_empresa=direccion_empresa;
        this.nombre_empresa=nombre_empresa;
        this.telefono_empresa=telefono_empresa;
        this.email_empresa=email_empresa;
        this.user_id=user_id;

    }
}

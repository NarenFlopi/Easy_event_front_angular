import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../../servicios/producto.service';
import { Producto } from '../../modelos/producto.model';
import { Router } from '@angular/router';
import { GlobalComponent } from '../../global/global.component';
import { User } from '../../modelos/user.model';


@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [CommonModule],
  providers: [ProductoService],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class DeleteComponent {
  listaProductos: Producto []=[];
  clave: string | null = null;
  usuario: User | null = null;

  constructor(private productoServicio:ProductoService, private _router: Router) { }

  ngOnInit(): void {
    this.validarToken();
    this.cargarProductos();
  }

  ngOnChanges(): void {
    console.log("Paso Changes")
  }

  validarToken(): void {
    if(this.clave == null){
      this.clave = localStorage.getItem("clave");
    }

    if(!this.clave){
      this._router.navigate(['inicio/body']);
    }
  }


  cargarProductos(): void {
    this.productoServicio.getProductos(this.clave).subscribe(
      (data: any) => {
        if (data && data.Producto && Array.isArray(data.Producto)) {
          this.listaProductos = data.Producto;
        } else {
          console.error('La respuesta del servicio no tiene la estructura esperada:', data);
        }
      },
      error => {
        console.log(error);
      }
    );
  }
  
  

  eliminarProducto(id:any):void {
    this.productoServicio.deleteProducto(id, this.clave).subscribe( 
      data=> {
      this.cargarProductos();
      },
      error => {
        console.log(error); 
    });

  }


}

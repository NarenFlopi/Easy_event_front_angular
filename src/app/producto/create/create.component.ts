import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Producto } from '../../modelos/producto.model';
import { ProductoService } from '../../servicios/producto.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  providers: [ProductoService],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  productoForm = this.fb.group({
    codigo: null,
    precio: null,
    nombre_producto: '',
    descripcion: '',
    cantidad_disponible: null,
    cantidad_inventario: null,
    categoria_id: null,
    empresa_id: null,
    foto: '',
  });

  id: string | null;
  clave: string | null = null;
 


  constructor(private fb: FormBuilder, private _router: Router, private productoServicio: ProductoService, private aRoute: ActivatedRoute){
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

   ngOnInit(): void {
    this.validarToken();
    this.verEditar();
   }

   validarToken(): void {
    if(this.clave == null){
      this.clave = localStorage.getItem("clave");
    }

    if(!this.clave){
      this._router.navigate(['inicio/body']);
    }
  }

   verEditar(): void {
    if (this.id!=null){
      this.productoServicio.getProducto(this.id, this.clave).subscribe(
        data => {
          this.productoForm.setValue({
            codigo: data.codigo, 
            precio: data.precio,
            nombre_producto: data.nombre_producto,
            descripcion: data.descripcion,
            cantidad_disponible: data.cantidad_disponible,
            cantidad_inventario: data.cantidad_inventario,
            categoria_id: data.categoria_id,
            empresa_id: data.empresa_id,
            foto: data.foto,
          });
        },
        error =>{
          console.log(error);
        }
      );
    }
   }

   

  agregarProducto(): void{
    const producto: Producto = {
      codigo: this.productoForm.get('codigo')?.value ?? 0,
      precio: this.productoForm.get('precio')?.value ?? 0,
      nombre_producto: this.productoForm.get('nombre_producto')?.value ?? '',
      descripcion: this.productoForm.get('descripcion')?.value ?? '',
      cantidad_disponible: this.productoForm.get('cantidad_disponible')?.value ?? 0,
      cantidad_inventario: this.productoForm.get('cantidad_inventario')?.value ?? 0,
      categoria_id: this.productoForm.get('categoria_id')?.value ?? 0,
      empresa_id: this.productoForm.get('empresa_id')?.value ?? 0,
      foto: this.productoForm.get('foto')?.value ?? '',
    }

    if (this.id!=null) {
      this.productoServicio.updateProducto(this.id, producto, this.clave).subscribe(
        data => {
          alert('Producto actualizado correctamente');
          this._router.navigate(['/producto/index']);
        },
        error => {
          console.log(error);
          this._router.navigate(['/producto/index']);
        }
      );

    }else{
  this.productoServicio.addProducto(producto, this.clave).subscribe(data => {
      console.log(data);
      alert('Producto agregado correctamente');
      this._router.navigate(['producto/index']);
   
    },
       error => {
        console.log(error);
        this._router.navigate(['producto/index']);
       })
  }

  }
}

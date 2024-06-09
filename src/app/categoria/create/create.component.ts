import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Categoria } from '../../modelos/categoria.model';
import { CategoriaService } from '../../servicios/categoria.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  providers: [CategoriaService],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  categoriaForm = this.fb.group({
    nombre: '',
  });

  id: string | null;
  clave: string | null = null;
 


  constructor(private fb: FormBuilder, private _router: Router, private categoriaServicio: CategoriaService, private aRoute: ActivatedRoute){
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
      this.categoriaServicio.getCategoria(this.id, this.clave).subscribe(
        data => {
          this.categoriaForm.setValue({
            nombre: data.nombre
          });
        },
        error =>{
          console.log(error);
        }
      );
    }
   }

   

  agregarCategoria(): void{
    const categoria: Categoria = {
      nombre: this.categoriaForm.get('nombre')?.value ?? '',
    }

    if (this.id!=null) {
      this.categoriaServicio.updateCategoria(this.id, categoria, this.clave).subscribe(
        data => {
          alert('Categoria actualizada correctamente');
          this._router.navigate(['/categoria/index']);
        },
        error => {
          console.log(error);
          this._router.navigate(['/categoria/index']);
        }
      );

    }else{
  this.categoriaServicio.addCategoria(categoria, this.clave).subscribe(data => {
      console.log(data);
      alert('Categoria creada correctamente');
      this._router.navigate(['categoria/index']);
   
    },
       error => {
        console.log(error);
        this._router.navigate(['categoria/index']);
       })
  }

  }
}

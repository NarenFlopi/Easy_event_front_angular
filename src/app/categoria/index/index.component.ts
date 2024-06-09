import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaService } from '../../servicios/categoria.service';
import { Categoria } from '../../modelos/categoria.model';
import { Router } from '@angular/router';
import { GlobalComponent } from '../../global/global.component';
import { User } from '../../modelos/user.model';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule],
  providers: [CategoriaService],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  listaCategorias: Categoria []=[];
  clave: string | null = null;
  usuario: User | null = null;

  constructor(private categoriaServicio:CategoriaService, private _router: Router) { }

  ngOnInit(): void {
    this.validarToken();
    this.cargarCategorias();
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


  cargarCategorias(): void {
    this.categoriaServicio.getCategorias(this.clave).subscribe(
      (data: any) => {
        if (data && data.Categoria && Array.isArray(data.Categoria)) {
          this.listaCategorias = data.Categoria;
        } else {
          console.error('La respuesta del servicio no tiene la estructura esperada:', data);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  editarCategoria(id:any): void{
    this._router.navigateByUrl("/categoria/editar/"+id);
  }

  eliminarCategoria(id:any):void {
    this.categoriaServicio.deleteCategoria(id, this.clave).subscribe( 
      data=> {
        this.cargarCategorias();
      },
      error => {
        console.log(error); 
    });

  }

}

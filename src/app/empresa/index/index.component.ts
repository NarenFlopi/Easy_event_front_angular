import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaService } from '../../servicios/empresa.service';
import { Empresa } from '../../modelos/empresa.model';
import { Router } from '@angular/router';
import { GlobalComponent } from '../../global/global.component';
import { User } from '../../modelos/user.model';


@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule],
  providers: [EmpresaService],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  listaEmpresas: Empresa []=[];
  clave: string | null = null;
  usuario: User | null = null;

  constructor(private empresaServicio:EmpresaService, private _router: Router) { }

  ngOnInit(): void {
    this.validarToken();
    this.cargarEmpresas();
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


  cargarEmpresas(): void {
    this.empresaServicio.getEmpresas(this.clave).subscribe(
      (data: any) => {
        console.log('Respuesta del servicio:', data); 
        if (data && data.Empresa && Array.isArray(data.Empresa)) {
          this.listaEmpresas = data.Empresa;
        } else {
          console.error('La respuesta del servicio no tiene la estructura esperada:', data);
        }
      },
      error => {
        console.log(error);
      }
    );
  }
  
  editarEmpresa(id:any): void{
    this._router.navigateByUrl("/empresa/editar/"+id);
  }


  eliminarEmpresa(id:any):void {
    this.empresaServicio.deleteEmpresa(id, this.clave).subscribe( 
      data=> {
      this.cargarEmpresas();
      },
      error => {
        console.log(error); 
    });

  }

  
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Empresa } from '../../modelos/empresa.model';
import { EmpresaService } from '../../servicios/empresa.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  providers: [EmpresaService],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  empresaForm = this.fb.group({
    nit_empresa: null,
    direccion_empresa: '',
    nombre_empresa: '',
    telefono_empresa: null,
    email_empresa: '',
    user_id: null,
  });

  id: string | null;
  clave: string | null = null;
 


  constructor(private fb: FormBuilder, private _router: Router, private empresaServicio: EmpresaService, private aRoute: ActivatedRoute){
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
      this.empresaServicio.getEmpresa(this.id, this.clave).subscribe(
        data => {
          this.empresaForm.setValue({
            nit_empresa: data.nit_empresa, 
            direccion_empresa: data.direccion_empresa,
            nombre_empresa: data.nombre_empresa,
            telefono_empresa: data.telefono_empresa,
            email_empresa: data.email_empresa,
            user_id: data.user_id,
          });
        },
        error =>{
          console.log(error);
        }
      );
    }
   }

   

  agregarEmpresa(): void {
  const empresa: Empresa = {
    nit_empresa: this.empresaForm.get('nit_empresa')?.value ?? 0,
    direccion_empresa: this.empresaForm.get('direccion_empresa')?.value ?? '',
    nombre_empresa: this.empresaForm.get('nombre_empresa')?.value ?? '',
    telefono_empresa: this.empresaForm.get('telefono_empresa')?.value ?? 0,
    email_empresa: this.empresaForm.get('email_empresa')?.value ?? '',
    user_id: this.empresaForm.get('user_id')?.value ?? 0,
  };

  if (this.id != null) {
    this.empresaServicio.updateEmpresa(this.id, empresa, this.clave).subscribe(
      data => {

        alert('Empresa actualizada correctamente');
        this._router.navigate(['/empresa/index']);
      },
      error => {
        console.log(error);
        this._router.navigate(['/empresa/index']);
      }
    );
  } else {
    this.empresaServicio.addEmpresa(empresa, this.clave).subscribe(
      data => {

        alert('Empresa creada correctamente');
        this._router.navigate(['/empresa/index']);
      },
      error => {
        console.log(error);
        this._router.navigate(['/empresa/index']);
      }
    );
  }
}
}

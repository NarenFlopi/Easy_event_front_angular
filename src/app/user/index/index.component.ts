import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../servicios/user.service';
import { Categoria } from '../../modelos/categoria.model';
import { Router } from '@angular/router';
import { GlobalComponent } from '../../global/global.component';
import { User } from '../../modelos/user.model';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule],
  providers: [UserService],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  listaUsers: User []=[];
  clave: string | null = null;
  usuario: User | null = null;

  constructor(private userServicio:UserService, private _router: Router) { }

  ngOnInit(): void {
    this.validarToken();
    this.cargarUsuarios();
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


  cargarUsuarios(): void {
    this.userServicio.getUsers(this.clave).subscribe(
      (data: any) => {
        if (data && data.Users && Array.isArray(data.Users)) {
          this.listaUsers = data.Users;
        } else {
          console.error('La respuesta del servicio no tiene la estructura esperada:', data);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

 
  
}

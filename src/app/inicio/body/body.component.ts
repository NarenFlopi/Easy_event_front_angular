import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { LoginService } from '../../servicios/login.service';
import { Login } from '../../modelos/login.model';
import { User } from '../../modelos/user.model';
import { Router } from '@angular/router';
import { GlobalComponent } from '../../global/global.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [LoginService],
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'] // Cambié 'styleUrl' a 'styleUrls'
})
export class BodyComponent {
  loginForm = this.fb.group({
    username: '',
    password: ''
  });

  respuesta: Login | null = null;
  clave: string | null = null;
  usuario: User | null = null;
  mostrarMensaje: boolean = false; // Variable para controlar la visibilidad del mensaje

  constructor(private fb: FormBuilder,
              private loginServicie: LoginService,
              private router: Router) { }

  ngOnInit(): void {
    if (this.clave == null) {
      this.clave = localStorage.getItem('clave');
    }
  }

  login(): void {
    // Verificar si ambos campos están llenos antes de realizar la llamada al servicio
    const usernameValue = this.loginForm.get('username')?.value;
    const passwordValue = this.loginForm.get('password')?.value;

    if (usernameValue && passwordValue) {
      this.loginServicie.login(usernameValue, passwordValue).subscribe(
        rs => {
          this.respuesta = rs;

          if (this.respuesta != null) {
            GlobalComponent.respuesta = this.respuesta;
            localStorage.setItem("clave", this.respuesta.access_token);

            window.location.reload();
          }
          this.router.navigate(['producto/index']);
        },
        error => {
          console.log(error);
        },
        () => {
          // Este bloque finally se ejecutará después de que la suscripción se complete
          this.router.navigate(['producto/index']).then(() => {
            window.location.reload();
          });
        }
        

      );
    } else {
      // Mostrar alerta de que se deben ingresar ambos campos
      this.mostrarMensaje = true;
    }
  }
}

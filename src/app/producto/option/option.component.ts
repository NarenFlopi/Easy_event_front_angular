import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-option',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './option.component.html',
  styleUrl: './option.component.scss'
})
export class OptionComponent {

  constructor(private router: Router) {};

  clave: string | null = null;

  ngOnInit(): void {
    if(this.clave == null){
      this.clave = localStorage.getItem('clave');
    }
  }

  logout(): void {
    localStorage.removeItem('clave'); // Elimina solo el elemento 'clave' del localStorage
    this.router.navigate(['/']);
  }

  
}

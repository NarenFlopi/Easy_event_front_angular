import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) {}

  clave: string | null = null;

  ngOnInit(): void {
    if (this.clave == null) {
      this.clave = localStorage.getItem('clave');
    }
  }

  logout(): void {
    localStorage.removeItem('clave');
    this.router.navigate(['/inicio/body']).then(() => {
      window.location.reload();
    });
  }

  
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { 
  title = 'product-catalog-web';

  constructor(private router: Router) {}

  goTo(caminho: string) {
    this.router.navigate([caminho]);
  }
}
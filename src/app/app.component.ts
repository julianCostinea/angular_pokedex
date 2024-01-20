import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokedexContainerComponent } from './pokedex-container/pokedex-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, PokedexContainerComponent],
})
export class AppComponent {
  title = 'angular-pokedex';
}

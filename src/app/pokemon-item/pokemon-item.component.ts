import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../types/pokemon';
import { NgIf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-pokemon-item',
  standalone: true,
  imports: [NgIf, NgOptimizedImage],
  templateUrl: './pokemon-item.component.html',
  styleUrl: './pokemon-item.component.css',
})
export class PokemonItemComponent {
  @Input() pokemon?: Pokemon;
  @Output() removePokemon = new EventEmitter();

  pokemonImageUrl =
    'https://images.unsplash.com/photo-1542779283-429940ce8336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80';
}

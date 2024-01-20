import { Component, Input } from '@angular/core';
import { Pokemon } from '../types/pokemon';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css',
})
export class PokemonListComponent {
  @Input() pokemons?: Pokemon[];

  removePokemon(pokemon: string): void {
    this.pokemons = this.pokemons?.filter((poke) => poke.name !== pokemon);
  }
}

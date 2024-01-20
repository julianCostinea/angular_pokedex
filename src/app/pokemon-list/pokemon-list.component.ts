import { Component, Input } from '@angular/core';
import { Pokemon } from '../types/pokemon';
import { NgFor } from '@angular/common';
import { PokemonItemComponent } from '../pokemon-item/pokemon-item.component';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css',
  imports: [NgFor, PokemonItemComponent],
})
export class PokemonListComponent {
  @Input() pokemons?: Pokemon[];

  onRemovePokemon(pokemon: string): void {
    this.pokemons = this.pokemons?.filter((poke) => poke.name !== pokemon);
  }
}

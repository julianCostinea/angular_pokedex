import { Component } from '@angular/core';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { PokemonListService } from '../pokemon-list/pokemon-list.service';
import { Pokemon } from '../types/pokemon';

@Component({
  selector: 'app-pokedex-container',
  standalone: true,
  templateUrl: './pokedex-container.component.html',
  styleUrl: './pokedex-container.component.css',
  imports: [PokemonListComponent],
})
export class PokedexContainerComponent {
  constructor(private pokemonListService: PokemonListService) {}

  pokemons: Pokemon[] = [];

  getPokemon(): void {
    this.pokemonListService.getPokemon().subscribe((pokemonList) => {
      this.pokemons = pokemonList.results;
    });
  }

  ngOnInit(): void {
    this.getPokemon();
  }
}

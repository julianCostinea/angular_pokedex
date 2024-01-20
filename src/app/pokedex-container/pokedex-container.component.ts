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
  unfilteredPokemon: Pokemon[] = [];

  getPokemon(): void {
    this.pokemonListService.getPokemon().subscribe((pokemonList) => {
      this.pokemons = pokemonList.results;
      this.unfilteredPokemon = pokemonList.results;
    });
  }

  onRemovePokemon(pokemon: string): void {
    this.pokemons = this.pokemons?.filter((poke) => poke.name !== pokemon);
  }

  filterPokemon(event: KeyboardEvent): void {
    const filter = (event.target as HTMLInputElement).value;

    if (filter.length === 0) {
      this.pokemons = this.unfilteredPokemon;
      return;
    }
    this.pokemons = this.pokemons.filter((poke) => poke.name.includes(filter));
  }

  ngOnInit(): void {
    this.getPokemon();
  }
}

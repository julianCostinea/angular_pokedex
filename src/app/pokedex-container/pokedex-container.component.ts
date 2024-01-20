import { Component } from '@angular/core';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { PokemonListService } from '../pokemon-list/pokemon-list.service';
import { Pokemon } from '../types/pokemon';
import { PokemonPaginationComponent } from '../pokemon-pagination/pokemon-pagination.component';
import { NgIf } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-pokedex-container',
  standalone: true,
  templateUrl: './pokedex-container.component.html',
  styleUrl: './pokedex-container.component.css',
  imports: [
    PokemonListComponent,
    PokemonPaginationComponent,
    NgIf,
    NgxSpinnerModule,
  ],
})
export class PokedexContainerComponent {
  constructor(private pokemonListService: PokemonListService) {}

  pokemons: Pokemon[] = [];
  unfilteredPokemon: Pokemon[] = [];
  loading = false;

  getPokemon(page: number = 0): void {
    this.loading = true;
    this.pokemonListService.getPokemon(page).subscribe((pokemonList) => {
      this.pokemons = pokemonList.results;
      this.unfilteredPokemon = pokemonList.results;
      this.loading = false;
    });
  }

  //moved here instead of pokemon-list so that search bar doesnt show removed pokemon
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

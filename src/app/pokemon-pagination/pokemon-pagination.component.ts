import { NgFor } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-pagination',
  standalone: true,
  imports: [NgFor],
  templateUrl: './pokemon-pagination.component.html',
  styleUrl: './pokemon-pagination.component.css',
})
export class PokemonPaginationComponent {
  //only 151 pokemons in the first generation
  numberOfPokemons = 151;

  numberOfPages = Array.from(
    { length: Math.ceil(this.numberOfPokemons / 10) },
    (_, i) => i + 1
  );

  currentPage = 1;

  //new api call on each page change
  //best to refactor so that we only call the api once and then filter the results depending on the page
  //but not sure if assignment meant that we should do it this way
  changePage(page: number): void {
    this.currentPage = page;
    this.pageChange.emit(page);
  }

  @Output() pageChange = new EventEmitter<number>();
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../types/pokemon';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-pokemon-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './pokemon-item.component.html',
  styleUrl: './pokemon-item.component.css',
})
export class PokemonItemComponent {
  @Input() pokemon?: Pokemon;
  @Output() removePokemon = new EventEmitter();
}

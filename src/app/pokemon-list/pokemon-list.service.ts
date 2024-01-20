import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon, apiResponse } from '../types/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonListService {
  constructor(private http: HttpClient) {}
  private pokemonUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10';

  getPokemon(): Observable<apiResponse> {
    return this.http.get<apiResponse>(this.pokemonUrl);
  }
}

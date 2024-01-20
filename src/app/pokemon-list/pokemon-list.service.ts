import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiResponse } from '../types/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonListService {
  constructor(private http: HttpClient) {}
  private pokemonUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10';

  getPokemon(page: number): Observable<apiResponse> {
    return this.http.get<apiResponse>(`${this.pokemonUrl}&offset=${page * 10}`);
  }
}

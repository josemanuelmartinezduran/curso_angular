import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class BulbasaurService {

  nombre:String = "Jose";

  constructor(private httpClient:HttpClient) { }

  async getPokemonData():Promise<Pokemon>{
    const res:any = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");
    const poke:Pokemon = res.json();
    return poke;
  }

  async getSomething():Promise<boolean>{
    return new Promise((resolve, reject)=>{
      setTimeout(
        ()=>{
          resolve(true);
        }
        , 3000
      )
    });
  }
}

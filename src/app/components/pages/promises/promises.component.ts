import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { BulbasaurService } from 'src/app/services/bulbasaur.service';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit{
  nombrePokemon:String = "";
  dataLoaded:boolean = false;
  constructor(public bulbasaurService:BulbasaurService){}

  async ngOnInit(): Promise<void> {
    //Callback
    /* this.bulbasaurService.getPokemonData().then((value:String)=>{
      console.log("Hola");
      console.log(value);
      console.log("Mundo");
    }); */

    //Async Await
    /* console.log("Hola");
    const resultado:String = await this.bulbasaurService.getPokemonData();
    console.log(resultado);
    console.log("mundo") */

    this.getData();
  }

  async getData(){
    //Leyendo el pokeApi
    console.log("Enviando el request");
    await this.bulbasaurService.getSomething();
    const res:Pokemon = await this.bulbasaurService.getPokemonData();
    console.log(res.name);
    this.nombrePokemon = res.name;
    this.dataLoaded = true;
    console.log("Recibiendo el response");
  }
}

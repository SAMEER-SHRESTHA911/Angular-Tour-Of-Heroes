import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit{

  selectedHero?: Hero;

  heroes: Hero[] = [];

  constructor(
    private heroService:HeroService, private messageService : MessageService
  ){}
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getHeroes();
  }
  getHeroes():void{
  this.heroService.getHeroes()
  .subscribe(heroes => this.heroes= heroes);
}
  onSelect(hero:Hero){
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id = ${hero.id}`)
  }
  hero:Hero = {
    id:1,
    name:`Windstorm`,
    date: new Date()  
  };
}


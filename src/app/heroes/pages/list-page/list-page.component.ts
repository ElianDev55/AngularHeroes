import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/heroe.interces';
import { HeroesServices } from '../../services/heroes-services.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent implements OnInit  {

  public heroes: Hero[] = [];

  constructor(
    private heroesServices: HeroesServices
  ) {}

  ngOnInit(): void {
    this.heroesServices.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}

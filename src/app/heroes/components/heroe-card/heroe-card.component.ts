import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/heroe.interces';

@Component({
  selector: 'heroe-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrl: './heroe-card.component.css'
})
export class HeroeCardComponent implements OnInit  {

  @Input()
  public hero!: Hero;

  ngOnInit(): void {
    if(!this.hero) throw new Error('heroe is required');
  }


}

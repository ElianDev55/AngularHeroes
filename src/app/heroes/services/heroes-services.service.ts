import { environments } from './../../../environments/environments.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/heroe.interces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesServices {


  private baseUrl: string = environments.baseUrl;

  constructor(
    private http: HttpClient
  ) {}


  public getHeroes():Observable<Hero[]>{

    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);

  }



}

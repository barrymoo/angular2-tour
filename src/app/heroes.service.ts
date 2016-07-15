import { Injectable } from '@angular/core';
import { HEROES } from './mock-heros';

@Injectable()
export class HeroesService {

  constructor() {}

  getHeroes() {
    return Promise.resolve(HEROES);
  }
}

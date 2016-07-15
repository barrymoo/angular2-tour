import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero.class';
import { HeroesService } from '../heroes.service';


@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.heroesService.getHeroes().then(heroes => this.heroes = heroes);
  }

  goToDetail() { /* Does Nothing */ }
}

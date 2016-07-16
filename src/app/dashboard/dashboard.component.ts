import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../hero.class';
import { HeroesService } from '../heroes.service';


@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private router: Router, private heroesService: HeroesService) { }

  ngOnInit() {
    this.heroesService.getHeroes().then(heroes => this.heroes = heroes);
  }

  goToDetail(hero: Hero) {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}

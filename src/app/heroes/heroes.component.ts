import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../hero.class';
import { HeroesService } from '../heroes.service';

@Component({
  moduleId: module.id,
  selector: 'app-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private router: Router, private heroesService: HeroesService) { }

  getHeroes() {
    this.heroesService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) { this.selectedHero = hero; }

  goToDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}

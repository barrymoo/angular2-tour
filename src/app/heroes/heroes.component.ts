import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../hero.class';
import { HeroesService } from '../heroes.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  moduleId: module.id,
  selector: 'app-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
  directives: [ HeroDetailComponent ]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  addingHero: boolean;
  error: any;
  constructor(private router: Router, private heroesService: HeroesService) { }

  getHeroes() {
    this.heroesService.getHeroes().then(heroes => this.heroes = heroes).catch(error => this.error = error);
  }

  addHero() {
    this.addingHero = true;
    this.selectedHero = null;
  }

  close(savedHero: Hero) {
    this.addingHero = false;
    if (savedHero) { this. getHeroes(); }
  }

  deleteHero(hero: Hero, event: any) {
    event.stopPropagation();
    this.heroesService
      .delete(hero)
      .then(res => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      })
      .catch(error => this.error = error);
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.addingHero = false;
  }

  goToDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }


}

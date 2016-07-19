import {Component, EventEmitter, OnInit, OnDestroy, Input, Output} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroesService } from '../heroes.service';
import { Hero } from '../hero.class';

@Component({
  moduleId: module.id,
  selector: 'app-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  @Input() hero: Hero;
  @Output() close = new EventEmitter();
  error: any;
  sub: any;
  navigated: boolean = false;

  constructor(private heroesService: HeroesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.navigated = true;
        this.heroesService.getHero(id).then(hero => this.hero = hero);
      } else {
        this.navigated = false;
        this.hero = new Hero();
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  save() {
    this.heroesService.save(this.hero)
      .then(hero =>
        {
          this.hero = hero;
          this.goBack(hero);
        })
      .catch(error => this.error = error)
  }

  goBack(savedHero: Hero = null) {
    this.close.emit(savedHero);
    if (this.navigated) { window.history.back(); }
  }

}

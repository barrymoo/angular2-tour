import { Component, OnInit, OnDestroy } from '@angular/core';
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
  hero: Hero;
  sub: any;

  constructor(private heroesService: HeroesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.heroesService.getHero(id).then(hero => this.hero = hero);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goBack() {
    let link = ['/dashboard'];
    this.router.navigate(link);
    /* window.history.back(); */
  }

}

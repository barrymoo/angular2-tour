# Angular2Tour

This project was generated with
[angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.9
attempting to workthough the [Angular 2
Tutorial](https://angular.io/docs/ts/latest/tutorial/). My first attempt failed
miserably because of the rescaffolding done during the "Routing" step. My
inexperience was obviously the cause, therefore I started fresh and I am
reimplemented the components to work through the "Routing" section.

# Thoughts

Tutorial was relatively easy after I figured out the rescaffolding bit. I will
be working on moving another project (drew)[https://github.com/barrymoo/drew]
to this stack next. I am hopeful it will just work on github.io. The next
steps to learning the stack are:
* integrating a real database (PostgreSQL or MongoDB)
* Jasmine tests

# Current State

Complete.

## Issues I encountered

1. The tutorial gives you:
   ```
   {
   path: '',
   redirectTo: '/dashboard',
   pathMatch: 'full'
   },
   ```
   but this code doesn't work. I changed it to:
   ```
   {
   path: '',
   redirectTo: 'dashboard'
   },
   ```
   and it is working. If someone can explain this to me that would be great!
2. The `ng g route <blah>` doesn't work currently due to changes in the angular
   router. Hopefully, when this is updated I can transition smoothly. 
3. `dashboard.component.spec.ts (17, 21): Supplied parameters do not match any
   signature of call target.`? How do I write the Jasmine test for this?
4. `in-memory-data.service.ts` was a little tricky, see [Stack Overflow
   Ticket](http://stackoverflow.com/questions/37377529/angular2-tutorial-tour-of-heroes-cannot-find-module-angular2-in-memory-web-a).
   Additionally, the `in-memory-data.service.ts` file needs to be in `src/app`
   directory to work properly. Apparently, it is not available on the server
   otherwise.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app
will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can
also use `ng generate directive/pipe/service/route/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the
`dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via
[Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via
[Protractor](http://www.protractortest.org/).  Before running the tests make
sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the
[Angular-CLI
README](https://github.com/angular/angular-cli/blob/master/README.md).

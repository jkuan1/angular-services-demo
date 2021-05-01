# Angular Demo on using Services

Credits to **Maximilian Schwarzmulle** For the assignment details
## Services details:
- We have a web application that works using emitters and listeners. Lets try to replace them with services instead! 
- Check out the solutions branch for how I implemented services into this app :) 

## To get set up:
- Make sure you have Angular CLI, npm, and git installed
- Pull the code into a directory using `git pull `
- install the necessary packages using `npm install`
- run `ng serve` and visit `http://localhost:4200/` to visit the app :)            

&nbsp;

# Notes about Angular Services

Services are a very broad category of values, functions, features that an app might need. By using the Dependency injection feature in Angular, we can *inject* services into components using the `@Injectable()` decerator. 

To use a service, it is important to define at least one *provider* of the service. This provider can be specific modules or components and it will be part of the service's metadata. 

&nbsp;

# Tips on using Angular CLI 

## Development server (local)

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

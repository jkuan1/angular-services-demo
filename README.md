# Angular Demo on using Services

Credits to **Maximilian Schwarzmulle** For the assignment details

&nbsp; 

# Solution explanation

If you take a look at the main branch, you will see that the inactive and active components talk to each other using Input, Output, and EventEmitters.  
While this is not a terrible method of making the app work, the implementation feels like a clunky chain and can be a problem if this app was any bigger or a little bit more complex. 

## What I did:
1. Create a UserService that will handle storing user status and change user status as well
2. Make this service available to the app component, which in turn makes it available to its children, the inactive and active components 
3. Remove the code that uses the old implementation in the ts files of the components and use the service instead. 
4. Test that it works! The end result is the same behavior with a lot more streamlined implementation :) 

I also injected a counter service into the user service that console.logs the number of times a user is moved to complete the second part of the assignment. 

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

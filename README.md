# LiebherrWorkspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Install Dependencies

`npm install`

## Standalone

For debugging and testing, you can start each of those projects individually. Please note that the core will throw some exceptions when doing so because it does not find the micro apps that are expected in an sub folder for the sake of simplicity.

## Use one of the following commands for this:

`ng serve --project shell --open`
`ng serve --project client-a --open`
`ng serve --project client-b --open`

## Development server

To run all micro appa use `node node_modules/@angular-architects/module-federation/src/server/mf-dev-server.js`. Navigate to `http://localhost:2000/`,`http://localhost:3000/`,`http://localhost:5000/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build:<app-name>` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

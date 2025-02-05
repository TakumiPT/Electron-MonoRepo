# Main App (Electron)

This is the main Electron application for the Electron monorepo. It manages the main process and loads the Angular renderer application.

## Getting Started

To get started with the main application, follow these steps:

1. **Install Dependencies**: Navigate to the `apps/main-app` directory and install the dependencies.
    ```sh
    npm install
    ```

2. **Run the Application**: Start the Electron application.
    ```sh
    npm start
    ```

## Available Scripts

- `npm start`: Starts the Electron application.
- `npm run build`: Builds the Electron application for production.
- `npm run lint`: Runs linting for the Electron application.
- `npm run test`: Runs tests for the Electron application using Jest.
- `npm run docs`: Generates documentation for the Electron application using Typedoc.

## Project Structure

- `src/`: Contains the source code for the Electron main process.
- `build/`: Contains build scripts and configuration for packaging the Electron application.

## Documentation

To generate the documentation for the Electron application, run the following command:
```sh
npm run docs
```
The generated documentation will be placed in the output directory.

## Explanation

This project uses the `template-vite-typescript` for `electron-forge` to leverage the benefits of Vite's fast build times and modern JavaScript features. The template provides a solid foundation for building Electron applications with TypeScript and Vite.

### Use of @doubleshot/nest-electron

We are using `@doubleshot/nest-electron` to integrate the NestJS framework with Electron. This allows us to leverage NestJS's powerful dependency injection, modular architecture, and extensive ecosystem within our Electron application. By using `@doubleshot/nest-electron`, we can create a more maintainable and scalable codebase, taking advantage of NestJS's features such as middleware, guards, interceptors, and more.

### No Vite Config File for Renderer

There is no separate Vite config file for the renderer because the renderer is managed by the Angular framework. Angular CLI handles the build and configuration for the renderer, making a separate Vite config file unnecessary.

### Vite Main Config Public Property

The Vite main config's public property is set to point to the `renderer-app` (Angular) dist folder. This is because the renderer application is built using Angular, and the output of the Angular build process is placed in the `dist` folder. By pointing the public property to this folder, the main process can serve the renderer application correctly.

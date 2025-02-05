# Renderer App (Angular)

This is the Angular renderer application for the Electron monorepo. It is loaded by the main Electron application and provides the frontend interface.

## Getting Started

To get started with the renderer application, follow these steps:

1. **Install Dependencies**: Navigate to the `apps/renderer-app` directory and install the dependencies.
    ```sh
    npm install
    ```

2. **Run the Application**: Start the Angular application.
    ```sh
    npm start
    ```

## Available Scripts

- `npm start`: Starts the Angular application.
- `npm run build`: Builds the Angular application for production.
- `npm run lint`: Runs linting for the Angular application.
- `npm run test`: Runs tests for the Angular application using Jest.
- `npm run docs`: Generates documentation for the Angular application using Typedoc.

## Project Structure

- `src/`: Contains the source code for the Angular application.
- `e2e/`: Contains end-to-end tests for the Angular application.

## Documentation

To generate the documentation for the Angular application, run the following command:
```sh
npm run docs
```
The generated documentation will be placed in the output directory.

## Explanation

This project uses the `template-vite-typescript` for `electron-forge` to leverage the benefits of Vite's fast build times and modern JavaScript features. The template provides a solid foundation for building Electron applications with TypeScript and Vite.

### No Vite Config File for Renderer

There is no separate Vite config file for the renderer because the renderer is managed by the Angular framework. Angular CLI handles the build and configuration for the renderer, making a separate Vite config file unnecessary.

### Vite Main Config Public Property

The Vite main config's public property is set to point to the `renderer-app` (Angular) dist folder. This is because the renderer application is built using Angular, and the output of the Angular build process is placed in the `dist` folder. By pointing the public property to this folder, the main process can serve the renderer application correctly.

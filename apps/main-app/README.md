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

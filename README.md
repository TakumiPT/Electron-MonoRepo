# Electron Monorepo

This project is an Electron monorepo that contains multiple applications. It combines an Electron main application with an Angular renderer application to create a seamless desktop experience. The main application is located in the `apps/main-app` directory, and the renderer application is located in the `apps/renderer-app` directory.

This project uses the Electron Forge Vite-Typescript template for the Electron application and Angular for the renderer application.

- **Electron Version**: 34
- **Electron Forge Version**: 7
- **Angular Version**: 19

## Getting Started

To get started with the project, follow these steps:

1. **Install Dependencies**: Navigate to the root directory of the project and install the dependencies using your preferred package manager (npm, yarn, etc.).
    ```sh
    npm install
    ```

2. **Run the Application**: Start both the Angular renderer application and the Electron main application.
    ```sh
    npm start
    ```

## Project Structure

- `apps/main-app`: Contains the main Electron application. This includes the main process code, Electron configuration, and packaging scripts.
- `apps/renderer-app`: Contains the Angular renderer application that is loaded by the main Electron application. This includes the Angular project files, components, services, and other frontend code.

## Scripts

- `npm start`: Starts both the Angular renderer application and the Electron main application.
- `npm run make`: Builds both the Angular renderer application and the Electron main application for production.
- `npm run lint`: Runs linting for both the Angular and Electron applications.
- `npm run test`: Runs tests for both the Angular and Electron applications using Jest.

## Development

During development, the main application will load the renderer application from `http://localhost:4200`. The `npm start` command will handle starting both applications.

## Building for Production

To build the entire application for production, run the following command:
```sh
npm run make
```
This will build the Angular application and package the Electron application for distribution.

To specify the platform and architecture, use the following commands:

- **Windows**:
    ```sh
    npm run make -- --platform=win32
    ```

- **macOS**:
    ```sh
    npm run make -- --platform=darwin
    ```

- **Linux**:
    ```sh
    npm run make -- --platform=linux
    ```

You can also specify the architecture (e.g., `x64`, `arm64`) by adding the `--arch` option:
```sh
npm run make -- --platform=<platform> --arch=<arch>
```

If the platform and architecture are not specified, the script will use the platform and architecture of the system on which the script is being run.

## Linting

To lint both the Angular and Electron applications, run the following command:
```sh
npm run lint
```

## Testing

To test both the Angular and Electron applications using Jest, run the following command:
```sh
npm run test
```

## License

This project is licensed under the MIT License.
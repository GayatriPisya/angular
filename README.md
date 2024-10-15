# Angular

## 1. Node.js
Node.js is required for running Angular projects and using npm (Node Package Manager) to install dependencies.

- Download and install Node.js from [nodejs.org](https://nodejs.org).
  
## 2. Angular CLI
Angular CLI is a command-line interface for Angular development.

- Install Angular CLI globally using the following command:
  
  ```bash
  npm install -g @angular/cli
## Creating a New Angular Project with Angular CLI

Once Angular CLI is installed, follow these steps to create a new Angular project:

1. Create a new Angular project by running the following command in your terminal:

    ```bash
    ng new my-angular-app
    ```

2. Follow the prompts to set up your project (e.g., choose whether to include routing, select a CSS preprocessor).

3. Navigate into the project folder:

    ```bash
    cd my-angular-app
    ```

4. Run the application:

    ```bash
    ng serve
    ```

5. Open a browser and navigate to `http://localhost:4200/` to view your app.

# Standalone 
 standalone: true: The component can be used without a module. It takes care of everything itself.<br>
 standalone: false: The component must be part of a module. It depends on the module for its setup.

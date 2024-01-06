## Todo List App ✅🔄📅

### Overview

This project is a simple Todo List application built with Node.js, Express, and follows the principles of Hexagonal Architecture.

### Features
In this delivery, we will create a server using Express.js to provide service to the REST API of the Todo List. We will implement the following functionalities:

- Add a task to the list: We will implement a route and a controller to allow users to add new tasks to their list;
- Mark a task as completed: We will create a route and a controller to allow users to mark a task as completed;
- Delete a task from the list: We will implement a functionality to delete tasks from the list using appropriate route and controller;
- Show the list of tasks: We will create a route and a controller to retrieve and display the complete list of tasks to users.

### Project Setup

- Clone the repository:
	`git clone https://github.com/Irine7/it-academy.git`
- Once you have downloaded the repository you should open the folder 'it-academy' and switch to the sprint-4 branch:
	`cd it-academy`
	`git checkout sprint-4`
- Then you will need to download all node modules:
	`npm install`
- And now you can run the project:
	`npm run build`
- To start the server locally:
	`npm run start`
- To run tests for a specific file:
	`npx jest name-of-file.test.ts`
- To run all tests:
	`npm test`

### Additional Tools Used
#### Postman
Postman was utilized for testing and debugging the API endpoints. It provides a user-friendly interface to send HTTP requests and inspect responses.

#### Middleware
Various middleware components were incorporated to enhance the functionality of the Express.js application. These include but are not limited to:
- Body Parser: Used for parsing incoming request bodies;
- Logger Middleware: Implemented to log relevant information about incoming requests;
- Error Handling Middleware: To handle and respond to errors in a consistent manner.

#### CORS (Cross-Origin Resource Sharing)
CORS was configured to enable Cross-Origin Resource Sharing. This is crucial for allowing the web-based frontend to make requests to the API server from a different domain.

#### Testing (Jest)
Jest was chosen as the testing framework for this project. It provides a comprehensive and developer-friendly environment for writing and executing tests.

#### Hexagonal Architecture
This project follows the Hexagonal Architecture, separating the core business logic from external concerns. The application is structured into different layers, ensuring a modular and maintainable codebase.

- Application Layer: Handles user interactions and invokes business logic.
- Domain Layer: Contains the core business logic and domain entities.
- Infrastructure Layer: Deals with external concerns, such as databases and web frameworks.
- Interfaces Layer: Deals with controllers and http.

#### Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.
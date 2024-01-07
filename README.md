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


### Layers
#### Domain
The Domain layer contains the enterprise logic and types. This layer should not depend on anything outside of itself. This layer typically defines the models and data structures that represent the business entities and concepts.

Examples:
- Entities
- Value Objects (immutable objects that represent a single value or concept)
- Domain Events (something that has happened in the past)

#### Application
The Application layer contains the business logic and types. This layer is dependent on the Domain layer, but not on anything outside of itself. This layer typically defines the application services that implement the use cases of the system. These services orchestrate the flow of data using the domain entities and types.

The Application layer only depends on abstractions, defined in interfaces, and these interfaces are implemented in outer layers. For example, persistence concerns (such as saving an item to a database) are defined only in terms of requirements; the persistence logic in the Infrastructure layer implements these requirements.

As the Presentation layer is external to Core, the Application layer has no dependency on any presentation concerns.

One example is obtaining information about the HTTP interaction (e.g. the user's ID or other information from an access token). This data is in the HttpContext, which is exposed in the Presentation layer, but not the Application layer. Rather than add a dependency on the Presentation layer, the Application layer can define its abstract requirements in an interface which can be implemented in the Presentation layer.

Examples:
- Application Services
- Use Cases/Features
- DTOs

#### Infrastructure
The Infrastructure layer is where the external systems are interacted with. For example, you might setup a library to wrap a third party Web API, database, or identity provider. This layer is dependent on the Application Core. This layer defines the implementation of the abstractions defined in the Application layer.

This layer is important for keeping our application clean and testable. For general unit testing this layer is the one that is mocked out the most - therefore interfaces should make sense and be easy to mock.

Examples:
- Persistence
- Wrappers for interacting with External APIs
- Email/SMS
- Logging
- Authentication Provider

#### User-Interface (Presentation)
The User-Interface layer is where the system is interacted with. This might be via a Web API, a GUI, or a CLI.

This layer is dependent on the Application layer & the Infrastructure layer.

The User-Interface layer's sole responsibility is to interface with the means of external interaction and the Application Core. This layer should not contain any business logic, and should not be dependent on any external items.

The most common use case is a Web API - and it's implementation should define the API routes, its input & output models, using HTTP or other web protocols. The API should then call the Application layer, and either return an Application DTO or map to a User-Interface ViewModel if required.

#### Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.
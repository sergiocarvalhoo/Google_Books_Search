# Mini - Project II

The objective of this project is to create a system to explore the consumption and publication of REST services with integration with the Google Books API.

## Technologies:

* `Express;`
* `Axios;`
* `React;`
* `Google O-Auth2;`
* `Google Books API.`

## Requisites:

### "External Domain":

* ` You need to create an integration with the Google Books API. To make requests to this API, it is necessary to use authentication via OAuth2. For this integration, only the search for books is necessary.`

### "Internal Domain":

Within your domain you will need to implement 3 components:

#### * `API Gateway:`

* `API Gateway, the API gateway is an API management tool that sits between the client and a collection of backend services, whether internal (your domain) or external (external domain). It serves to "centralize" the calls that will be made by the application that will be executed in the browser. An API gateway is a way to decouple the client interface from your backend implementation. When a client makes a request, the API gateway breaks it up into multiple requests, directs them to the appropriate locations, and produces a response.`

#### * `Client:`

* `Client, will be the end user interface. It can be done with any framework you want, or simply HTML/CSS/JS. Only a functional interface is required.`

#### * `Comments API:`

* `Comments API, will be an API built by the group to register, delete and list comments made about a book. Use whatever language you like and whatever persistence mechanism you find interesting.`


# Running the Project:


## Back-end
To run the code, go to the project's backend directory, enter the src folder and run the following commands:

### Install requisites:
* `npm i`

### Finally run it:
* `npm start`

### Access the API in browser:
http://localhost:3001


## Front-end
To run the code, go to the project's frontend directory, enter the src folder and run the following commands:

### Install requisites:
* `npm i`

### Finally run it:
* `npm start`

### Access the Client Frontend in browser:
http://localhost:3000
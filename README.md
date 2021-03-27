<h1 align="center">Wine Application</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/nkosi-tauro/wine-application?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/nkosi-tauro/wine-application?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/nkosi-tauro/wine-application?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/nkosi-tauro/wine-application?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/nkosi-tauro/wine-application?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/nkosi-tauro/wine-application?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/nkosi-tauro/wine-application?color=56BEB8" /> -->
</p>


## :dart: About ##

A Dockerized CRUD Wine application


## :rocket: Technologies ##

The following tools were used in this project:

- [Node.js](https://nodejs.org/en/)
- [Vue3](https://v3.vuejs.org/)
- [MongoDB](https://cloud.mongodb.com/)
- [Docker](https://www.docker.com/)

## :white_check_mark: Requirements ##

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/nkosi-tauro/wine-application

# Access
$ cd wine-application

# Startup with Docker

#Setup env for mongoDB
$ add DB_PASS to .env file (backend folder)

#Run Docker Compose
$ docker-compose up --build


#Startup without Docker

#Setup env for mongoDB
$ add DB_PASS to .env file (backend folder)

# Install dependencies (backend)
$ npm install

# Run the project Backend
$ npm start

# Install dependencies (frontend)
$ cd client && npm install

# Run the project Frontend
$ npm run serve

# The Frontend server will initialize on port <http://localhost:8081>
```

## :memo: License ##

This project is under license from MIT. For more details, see the [LICENSE](LICENSE) file.


Made with :heart: by <a href="https://github.com/nkosi-tauro" target="_blank">Nkosilathi Tauro</a>

&#xa0;

<a href="#top">Back to top</a>

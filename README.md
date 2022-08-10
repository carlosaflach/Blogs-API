# Blogs-API Project

## Introduction:

Blogs API Project is a RESTFul API developed in the Back-end Module at [Trybe](https://www.betrybe.com/)  Web Development course. <br />
It is a posts and users management system for a blog that presents all the CRUD methods.<br />


## Applied Technologies

<ul>
    <li><a href="https://nodejs.org/en/">Node.js<a/></li>
    <li><a href="https://expressjs.com/">Express<a/></li>
    <li><a href="https://www.mysql.com/">MySQL<a/></li>
    <li><a href="https://sequelize.org/">Sequelize</a></li>
    <li><a href="https://jwt.io/">JWT</a></li>
    <li><a href="https://developer.mozilla.org/pt-BR/docs/Glossary/CRUD">CRUD</a></li>
    <li><a href="https://www.toptal.com/express-js/nodejs-typescript-rest-api-pt-1">MSC</a></li>
    <li><a href="https://developer.mozilla.org/pt-BR/docs/Glossary/REST">REST</a></li>
    
  </ul>
  
## Methodologies:

- Kanban
- Scrum
 
## Instructions

<div>
  <details>
  <summary>:octocat: <strong>Cloning the repository and installing node modules</strong></summary>

  1. Clone the repository

  - `git clone git@github.com:carlosaflach/Store-Manager.git`;

  - Enter in the folder that was created in the cloning process:
    - `cd Blogs-API`;

  2. Install the dependencies

  - `npm install` ou `npm i`;
  </details>
  <details>
  <summary>:game_die: <strong>Configuring the database connection</strong></summary>

  1. Creating the configuration file
  
  - Create an .env file in the project root:
    - `touch .env`;
    
  - Place the following information in the .env file and replace with your credentials:    
    ```
#### SERVER VARS
NODE_ENV=development
API_PORT=3000

#### DATABASE VARS
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_DB_NAME=blogs-api
MYSQL_USER=yourUser
MYSQL_PASSWORD=yourPassword

#### SECRECT VARS
JWT_SECRET=yourSecret
    ```
   >NOTE: You will need to create a local database to use this API. In this manual, I called the database name as blogs-api, but you can call it whatever you want. It's just important that you make sure to create one database and configure it at the .env file to the API work properly.
  </details>
  
  <details>
  <summary>:running: <strong>Running the API locally</strong></summary>
  
  - Run the following command in the terminal from the project root::
  
    - `npm start`;
    
  </details>
  
  <details>
  <summary>:whale: <strong>Running via Docker</strong></summary><br>
  <p>If you wanted and have the knowledge of how to use it, there is a file <em><strong>docker-compose</strong></em> in the root of the project, follow the commands create and access the containers:</p>
  
  - At the root of the project run the following command:
  
    - `docker-compose up -d`;
    
  - To access the container terminal, run the following command:
  
    - `docker container exec -it store_manager bash`;
  
  - To close the container terminal, run the command:
  
    - `exit`;
    
  - If you are no longer using containers, run the following command:
  
    - `docker-compose down`;
  </details>

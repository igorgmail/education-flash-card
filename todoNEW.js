// ! 1. Инициализация проекта;
// ?   - npm init -y
// ?   - npm i express
// ?   - npx create-gitignore node
// ?   - npx eslint --init
// ?   - npm i -D nodemon morgan
// ?      "start": "node src/app.js",
// ?      "dev": "nodemon src/app.js --ignore sessions --ext js,jsx"
// ?   - npm i dotenv    пакет работы с .env


// ! 2. Установим React Babel
// *  - npm i @babel/core @babel/preset-env @babel/preset-react @babel/register react react-dom
// *  - touch .babelrc

// ! 3. Содержимое .babelrc
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}

//! 4. Шапка файла;
/*
require('@babel/register');
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const renderTemplate = require('./src/lib/renderTemplate');

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public/')));  
app.use(express.urlencoded({ extended: true }));   
app.use(express.json());      
*/

//! 5. renderTemplate 
//? =================================================================
require('@babel/register');

const React = require('react');
const ReactDOMServer = require('react-dom/server');

const renderTemplate = (component, props, res) => {
  const reactEl = React.createElement(component, props);
  const html = ReactDOMServer.renderToStaticMarkup(reactEl);
  res.write('<!DOCTYPE html>');
  res.end(html);
};

module.exports = renderTemplate;
//? =================================================================

// ! 6 Установка БД
// ? npm install -D sequelize pg pg-hstore  <======== подгружает библиотеку
// ? npm install -D sequelize-cli  <============== устонавливает зависимость
// ? touch .sequelizerc
// ? npm install sequelize
// ? npx sequelize-cli init     <================  создаются папки 

// ! 6.1 Содержимое .sequelizerc
const path = require('path');
require('dotenv').config()

module.exports = {
  'config': path.resolve('db', 'config.json'),
  'models-path': path.resolve('db', 'models'),
  'seeders-path': path.resolve('db', 'seeders'),
  'migrations-path': path.resolve('db', 'migrations')
};

// ! 6.2 в конфиг прописываем 
/*
"development": {
  "use_env_variable": "DB_URL"
},
*/
// ? touch .env
// ? Прячем в него наши данные 
PORT=3000
DB_URL=postgres://frol:qwerty@localhost:5432/cookie

// ? 6.3 
// ? npx sequelize db:create <===== создать БД

// ! 6.4 dbConnectCheck
// ? touch dbConnectCheck.js

const { sequelize } = require('./models');

module.exports = async () => {
  try {
    await sequelize.authenticate();
    console.log('База данных успешно подключена! :)');
  } catch (error) {
    console.error('База данных не подключена:', error.message);
  }
};
// ? ////////////////////////////////////////////////////////////////////////////////////

// ! 6.5 создаём модели 
// ? npx sequelize-cli model:generate --name User --attributes login:string,password:string

// ! 6.6 создаем сиды
// ? npx sequelize seed:generate --name CreateRaces  <============== создать сидер
module.exports = {
 async up(queryInterface, Sequelize) {
   await queryInterface.bulkInsert(
     'Название таблице добавить s',
     [{
       name: 'Пламя',
       breed: 'Донская',
       createdAt: new Date(),
       updatedAt: new Date(),
     }, {
       name: 'Рысак',
       breed: 'Монгольская',
       createdAt: new Date(),
       updatedAt: new Date(),
     },{
       name: 'Ветерок',
       breed: 'Якутская',
       createdAt: new Date(),
       updatedAt: new Date(),
     }],
     {},
   );
 },

 async down(queryInterface, Sequelize) {
   await queryInterface.bulkDelete('Horses', null, {});
 },
};

// ? npx sequelize db:seed:all <===== накатить все сиды
// ? npx sequelize db:seed --seed 20220912134841-CreateEntries.js <============= накатить конкретный сид
// ? npx sequelize db:seed:undo:all    <=================== oткатить все сиды
// ? =========================================================================================================

// ! 6.7 Migrate
// ? npx sequelize-cli db:migrate  <================== накатить миграцию 
// ? npx sequelize-cli db:migrate:undo:all <============ что бы откатить миграцию


// ! NEW
// ? npm i express-session
// ? npm i session-file-store
// ? npm i bcrypt
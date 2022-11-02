/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Questions', [{
      // Колода 1
      body: 'Стольца Греции',
      deckId: 1,
      answer: 'Афины',
    },
    {
      body: 'Стольца Ливана',
      deckId: 1,
      answer: 'Бейрут',
    },
    {
      body: 'Стольца Пакистана',
      deckId: 1,
      answer: 'Исламабад',
    },
    {
      body: 'Стольца Чили',
      deckId: 1,
      answer: 'Сантьяго',
    },
    {
      body: 'Стольца Тунис',
      deckId: 1,
      answer: 'Тунис',
    },
    // Колода 2
    {
      body: 'Content-Type: application/json - является HTTP headers ?',
      deckId: 2,
      answer: 'Да',
    },
    {
      body: 'HTTP-запрос (request) состоит из блоков HTTP ?',
      deckId: 2,
      answer: 'Нет',
    },
    {
      body: 'HTTP - текстовый протокол ?',
      deckId: 2,
      answer: 'Да',
    },
    {
      body: 'Методом DELETE можно изменить данные ?',
      deckId: 2,
      answer: 'Нет',
    },
    {
      body: 'Код ответа 418 - "я чайник"',
      deckId: 2,
      answer: 'Да',
    },
    // Колода 3
    {
      body: 'В какой стране начался Хэллоуин?',
      deckId: 3,
      answer: 'Ирландия',
      answerOne: 'Бразилия',
      answerTwo: 'Ирландия',
      answerThree: 'Индия',
      answerFour: 'Германия',
    },
    {
      body: 'Что из этого не является традиционным украшением Хэллоуина?',
      deckId: 3,
      answer: 'Венок',
      answerOne: 'Котел',
      answerTwo: 'Скелет',
      answerThree: 'Венок',
      answerFour: 'Свеча',
    },
    {
      body: 'Что означает слово «Хэллоуин»?',
      deckId: 3,
      answer: 'Вечер святых',
      answerOne: 'Страшная ночь',
      answerTwo: 'День воссоединения',
      answerThree: 'День сладостей',
      answerFour: 'Вечер святых',
    },
    {
      body: 'Где находится Трансильвания, иначе известная как дом графа Дракулы?',
      deckId: 3,
      answer: 'Румыния',
      answerOne: 'Ирландия',
      answerTwo: 'Аляска',
      answerThree: 'Северная Каролина',
      answerFour: 'Румыния',
    },
    {
      body: 'Какая группа людей начала Хэллоуин?',
      deckId: 3,
      answer: 'Кельты',
      answerOne: 'Викинги',
      answerTwo: 'Мавры',
      answerThree: 'Кельты',
      answerFour: 'Римляне',
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};

module.exports = class Stat {
  constructor(userName, score) {
    this.userName = userName;
    this.score = score ?? 0;
    this.allAnswer = 0;
    this.rightAnswer = 0;
    this.wrongAnswer = 0;
  }

  scorePlus() {
    this.score += 1;
    console.log('model SCORE', this.score);
  }
};

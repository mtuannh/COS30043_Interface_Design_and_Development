const { createApp } = Vue;

createApp({
  data() {
    return {
      numberToGuess: 0,
      guessInput: null,
      message: 'Start guessing',
      attemptsLeft: 5,
      guesses: [],
      gameEnded: false
    };
  },
  created() {
    this.initGame();
  },
  methods: {
    generateRandomNumber() {
      return Math.floor(Math.random() * 100) + 1;
    },
    initGame() {
      this.numberToGuess = this.generateRandomNumber();
      this.guessInput = null;
      this.message = 'Start guessing';
      this.attemptsLeft = 5;
      this.guesses = [];
      this.gameEnded = false;
    },
    startOver() {
      this.initGame();
    },
    giveUp() {
      if (this.gameEnded) 
        return;
      this.message = `The correct number was ${this.numberToGuess}.`;
      this.gameEnded = true;
    },
    checkGuess() {
      if (this.gameEnded) return;

      const raw = this.guessInput;
      const n = typeof raw === 'number' ? raw : Number(raw);
      if (raw === '' || raw === null || Number.isNaN(n)) {
        this.message = 'Please enter a valid number.';
        return;
      }

      this.attemptsLeft -= 1;
      this.guesses.push(n);

      if (n === this.numberToGuess) {
        this.message = 'You got it!';
        this.gameEnded = true;
        return;
      }

      if (this.attemptsLeft === 0) {
        this.message = `Game over! The correct number was ${this.numberToGuess}.`;
        this.gameEnded = true;
        return;
      }

      this.message = n < this.numberToGuess ? 'Guess higher' : 'Guess lower';
    }
  }
}).mount('#app');

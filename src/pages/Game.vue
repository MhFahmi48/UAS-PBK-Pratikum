<template>
    <div class="container">
      <div class="game">
        <h1>{{ message }}</h1>
        <div class="buttons">
          <button class="button" @click="play('batu')">Batu</button>
          <button class="button" @click="play('gunting')">Gunting</button>
          <button class="button" @click="play('kertas')">Kertas</button>
        </div>
        <div v-if="result !== ''">
          <p class="result">Hasil: {{ result }}</p>
          <p class="result">Kamu memilih: {{ userChoice }}</p>
          <p class="result">Komputer memilih: {{ computerChoice }}</p>
        </div>
        <button @click="kembaliKeMenu" class="button-1id">Menu</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: 'Batu Gunting Kertas Game',
        result: '',
        userChoice: '',
        computerChoice: ''
      };
    },
    methods: {
      play(userChoice) {
        const choices = ['batu', 'kertas', 'gunting'];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
        this.userChoice = userChoice;
        this.computerChoice = computerChoice;
  
        if (userChoice === computerChoice) {
          this.result = 'Seri!';
        } else if (
          (userChoice === 'batu' && computerChoice === 'gunting') ||
          (userChoice === 'gunting' && computerChoice === 'kertas') ||
          (userChoice === 'kertas' && computerChoice === 'batu')
        ) {
          this.result = 'Kamu Menang!';
        } else {
          this.result = 'Kamu Kalah!';
        }
      },
      kembaliKeMenu(){
        this.$router.push('/Home')
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .game {
    text-align: center;
  }
  
  h1 {
    color: #FF5733;
  }
  
  .result {
    font-size: 20px;
    margin-top: 20px;
    color: #333;
  }
  
  .button-1id {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #FF5733;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  
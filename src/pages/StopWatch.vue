<template>
    <div class="stopwatch-widget">
      <h2>Stopwatch</h2>
      <div class="time-container">
        <p>{{ formatTime }}</p>
      </div>
      <div class="button-container">
        <button @click="startStopwatch" :disabled="isRunning" class="start-button">Start</button>
        <button @click="stopStopwatch" :disabled="!isRunning" class="stop-button">Stop</button>
        <button @click="resetStopwatch" class="reset-button">Reset</button>
      </div>
    </div>
    <button @click="kembaliKeMenu" class="button-1id">Menu </button>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isRunning: false,
        startTime: null,
        elapsedTime: 0,
        timerInterval: null
      };
    },
    computed: {
      formatTime() {
        const milliseconds = this.elapsedTime % 1000;
        const seconds = Math.floor(this.elapsedTime / 1000) % 60;
        const minutes = Math.floor(this.elapsedTime / 60000) % 60;
        const hours = Math.floor(this.elapsedTime / 3600000);
  
        return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
      },
    },
    methods: {
      startStopwatch() {
        if (!this.isRunning) {
          this.isRunning = true;
          this.startTime = Date.now();
  
          this.timerInterval = setInterval(() => {
            this.elapsedTime = Date.now() - this.startTime;
          }, 10);
        }
      },
      stopStopwatch() {
        if (this.isRunning) {
          this.isRunning = false;
          clearInterval(this.timerInterval);
        }
      },
      resetStopwatch() {
        this.isRunning = false;
        clearInterval(this.timerInterval);
        this.elapsedTime = 0;
      },
      kembaliKeMenu(){
        this.$router.push('/Home')
      }
    },
  };
  </script>
  
  <style scoped>
  .stopwatch-widget {
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
    max-width: 300px;
    margin: 0 auto;
  }
  
  .stopwatch-widget h2 {
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .time-container {
    background-color: #f5f5f5;
    padding: 16px;
    border-radius: 8px;
    margin-bottom: 20px;
  }
  
  .time-container p {
    color: #333;
    font-size: 36px;
    margin: 0;
  }
  
  .button-container {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  
  button {
    padding: 12px 24px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .start-button {
    background-color: #4caf50;
    color: #fff;
  }
  
  .stop-button {
    background-color: #f44336;
    color: #fff;
  }
  
  .reset-button {
    background-color: #007bff;
    color: #fff;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  button:disabled {
    background-color: #ccc;
    color: #999;
    cursor: not-allowed;
  }

  .button-1id {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  
<template>
    <div class="photo-widget">
      <h2>{{ title }}</h2>
      <img :src="photoUrl" :alt="title" />
      <div class="button-container">
        <button @click="getRandomPhoto('animal')">Random Foto</button>
      </div>
    </div>
    <button @click="kembaliKeMenu">Menu </button>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
        photoUrl: '',
      };
    },
    mounted() {
      this.getRandomPhoto('animal');
    },
    methods: {
      async getRandomPhoto(category) {
        try {
          const apiKey = '38037020-2c48722c03be8437a05b588e6';
          const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${category}&image_type=photo&orientation=horizontal`;
  
          const response = await fetch(apiUrl);
          const data = await response.json();
  
          const randomIndex = Math.floor(Math.random() * data.hits.length);
          const randomPhoto = data.hits[randomIndex];
  
          this.title = randomPhoto.tags;
          this.photoUrl = randomPhoto.webformatURL;
        } catch (error) {
          console.error('Error fetching random photo:', error);
        }
      },
      kembaliKeMenu(){
        this.$router.push('/Home')
      }
    },
  };
  </script>
  
  <style scoped>
  .photo-widget {
    border-radius: 8px;
    background-color: #f5f5f5;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
    max-width: 300px;
    margin: 0 auto;
  }
  
  .photo-widget h2 {
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .photo-widget img {
    max-width: 100%;
    height: auto;
    margin-bottom: 20px;
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
    background-color: #007bff;
    color: #fff;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  button:focus {
    outline: none;
  }
  
  button:first-child {
    background-color: #e91e63;
  }
  
  button:first-child:hover {
    background-color: #c2185b;
  }
  </style>
  
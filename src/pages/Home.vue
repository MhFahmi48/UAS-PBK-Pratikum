<template>
  <div>
    <h1>
      {{ title }}
    </h1>
  </div>
    <div v-if="showModal">

      
      <Modal :header="header" :text="text"  @close="openModal"/>
    </div>
    <button @click="openModal">Biodata Saya</button>
    <button @click="kembalikeGame">Game </button>
    <button @click="kembalikeCuaca">Cuaca </button>
    <button @click="kembalikeLokasi">Lokasi </button>
    <button @click="kembalikePhoto">Photo </button>
    <button @click="kembalikeStopWatch">StopWatch </button>
    
  </template>
  
  <script>
  import Modal from '../components/Modal.vue'
  
  export default {
    components:{
      Modal
    },
    data(){
      return{
        title: "UAS PBK & QUIS ",
        header : "Nama :M.Husnol Fahmi NPM : 213510002",
        text : "Sekian Dan Terima Kasih :)",
        showModal : false
      };
    },
    methods : {
      handleClick(){
        console.log(this.$refs.tes)
        this.$refs.tes.classList.add('ditekan')
        this.$refs.tes.focus()
      },
      openModal(){
        this.showModal = !this.showModal
      },
      kembaliKeLogin(){
        this.$router.push('/Login')
      },
      kembalikeCuaca(){
        this.$router.push('/Cuaca')
      },
      kembalikeGame(){
        this.$router.push('/Game')
      },
      kembalikeLokasi(){
        this.$router.push('/Lokasi')
      },
      kembalikePhoto(){
        this.$router.push('/Photo')
      },
      kembalikeStopWatch(){
        this.$router.push('/StopWatch')
      }
    }
  }
  </script>
  
  <style scoped>
  
  h1{
    border-bottom: 1px solid #ddd;
    display: inline-block;
    padding-bottom: 10px;
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
  </style>
<template>
    <div>
      <h1>Liste des départements</h1>

      <router-link to="/posts">ajouter un département</router-link>

      <ul>
        <li v-for="(departement,index) in departements" :key="index">
          {{ departement.name }}
        </li>
      </ul>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {useAxios} from '@/composable/useAxios';
import router from '@/router';

const departements = ref([]); 
async function getDepartement(){
    const response = await useAxios().get('/departement');
    departements.value = response.data; 
}
getDepartement();

</script>

<style scoped>
    h1{
        text-align: center;
        color: rgb(250, 246, 246);
        margin: 40px 0;
        font-size: 45px;
        font-weight: bold;
    }
    ul {
        column-count: 3; 
    }
    li{
        color: white;
        padding: 30px 0;
        font-size: 18px;
    }
    a{
        outline: none;
        text-decoration: none;
        padding: 10px;
        border-radius: 5px;
        background-color: blue;
        color: white;
    }
</style>



  
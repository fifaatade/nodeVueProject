<template>
    <h1>enregistrer un nouveau département!</h1>
    <form @submit="addDepartement">
        <div class="">
            <div >
                <label for="depId">Numéro :</label>
                <input type="number" id="depId" v-model="depId" />
            </div>
            <div>
                <label for="name">Nom :</label>
                <input type="text" id="name" v-model="name" placeholder="departement"/>
            </div>
        </div>
        <div class="btn">
            <button type="submit">Envoyer</button>
        </div>
        <router-link to="/">retour</router-link>

    </form>


</template>


<script setup lang="ts">

import { ref } from 'vue';
import { useAxios } from '@/composable/useAxios';
import {clientHttp} from '@/composable/useAxios'

const depId = ref('');
const name = ref('');

const addDepartement = async() => {
    try {
        const data = {
            depId: depId.value,
            name: name.value,
        };
        await useAxios().post('/departement', data);
        console.log(data);
    }
    catch (error) {
        console.log("Erreur d'envoi : " + error);
    }
};

</script>


<style scoped>
    h1{
        text-align: center;
        color: rgb(250, 246, 246);
        margin: 40px 0;
        font-size: 45px;
        font-weight: bold;
    }
    label{
        color: white;
        font-size: 16px;
    }
    input{
        outline: none;
        border-radius: 5px;
        padding: 10px;
        width: 100%;
        margin-bottom: 25px;
    }
    .btn{
        display: flex;
        justify-content: flex-end;
    }
    button{
        outline: none;
        text-decoration: none;
        padding: 8px;
        width: 10%;
        font-weight: bold;
        border-radius: 5px;
        background-color: greenyellow;
        color: black;
    }
    a{
        outline: none;
        text-decoration: none;
        padding: 10px;
        border-radius: 5px;
        background-color: rgb(43, 43, 105);
        color: white;
        font-weight: bold;
    }
</style>


  
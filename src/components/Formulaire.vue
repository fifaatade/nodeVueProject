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
                <input type="text" id="name" v-model="name" />
            </div>
        </div>
        <div class="btn">
            <button type="submit">Envoyer</button>
        </div>
    </form>


</template>


<script setup lang="ts">
import { ref } from 'vue';
import { useAxios } from '@/composable/useAxios';

const depId = ref('');
const name = ref('');

const addDepartement = async () => {
    try {
        const data = {
            depId: depId.value,
            name: name.value,
        };

        await useAxios().post('/departement', data);
        console.log('succès')
    } catch (error) {
        console.log("Erreur d'envoi : " + error);
    }
};
addDepartement();
</script>

<style scoped>
    h1{
        text-align: center;
        color: rgb(250, 246, 246);
        margin: 40px 0;
        font-size: 45px;
        font-weight: bold;
    }
    
    input{
        outline: none;
        border-radius: 35px;
        padding: 10px;
        width: 30%;
        margin-bottom: 25px;
    }
    .btn{
        display: flex;
        justify-content: flex-end;
        padding-right: 15%;
    }
    button{
        outline: none;
        text-decoration: none;
        padding: 8px;
        width: 10%;
        border-radius: 5px;
        background-color: rgb(133, 133, 195);
    }
</style>


  
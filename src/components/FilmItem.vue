<template>
    <!--Adds a row to the table for each film-->
    <td>{{ film.title }}</td>
    <td>{{ film.premiereYear }}</td>
    <td>{{ film.seen ? 'Ja': 'Nej' }}</td>
    <td @click="$emit('deleteFilm', film._id)">X</td>        
  
</template>

<script setup>
    const props = defineProps({
        film: Object
    })

    //Emits to delete a film
    const emits = defineEmits(["deleteFilm"])


</script>

<style>


/*Styling for table*/


td {
    margin-left: 5%;
    padding: 0.3em;
     border: 1px solid black;
     text-align: center;

}


</style>
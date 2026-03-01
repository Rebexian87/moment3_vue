<template>
    <td>{{ film.title }}</td>
    <td>{{ film.premiereYear }}</td>
    <td>{{ film.seen ? 'Är sedd': 'Är inte sedd' }}</td>
    <td @click="$emit('deleteFilm', film._id)">X</td>        
  
</template>

<script setup>
    const props = defineProps({
        film: Object
    })

    const emits = defineEmits(["deleteFilm"])


</script>

<style>


/*Styling for table*/
table { 
  
    margin-top: 5%;
    font-size: 1.0em;
    line-height: 120%;
}

th {
    
    text-align: left;
    padding: 0.3em;
}

td {
    margin-left: 5%;
    padding: 0.3em;
     border: 1px solid black;
     text-align: center;

}

 table tbody tr:nth-of-type(even) {
    background-color: rgb(241, 239, 239);
}
 table tbody tr:nth-of-type(odd) {
    background-color: rgb(204, 226, 233);
}


</style>
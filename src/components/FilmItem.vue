<template>

    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Släppt</th>
                <th>Sedd</th>
                <th>Ta bort</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{{ film.title }}</td>
                <td>{{ film.premiereYear }}</td>
                <td>{{ film.seen ? 'Är sedd': 'Är inte sedd' }}</td>
                <td @click="$emit('deleteFilm', film._id)">X</td>
            </tr>
        </tbody>
    </table>
    <!-- <article @click="$emit('deleteFilm', film._id)">{{ film.title }}</article> -->
</template>

<script setup>
    const props = defineProps({
        film: Object
    })

    const emits = defineEmits(["deleteFilm"])


</script>

<style>
</style>
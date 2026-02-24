<template>
    <article @click="$emit('deleteFilm', film._id)">{{ film.title }}</article>
</template>

<script setup>
    const props = defineProps({
        film: Object
    })

    const emits = defineEmits(["deleteFilm"])
</script>
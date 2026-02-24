<template>
    <article>{{ film.title }}</article>
</template>

<script setup>
    const props = defineProps({
        film: Object
    })
</script>
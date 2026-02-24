<template>
    <header>
        <div class="container">
            <h1>Moment3</h1>
            <nav>
                <ul>
                    <li><RouterLink to ="/">Start</RouterLink></li>
                    <li><RouterLink to ="/film">Film</RouterLink></li>
                    <li><RouterLink to ="/info">Info</RouterLink></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
</script>

<style scoped>
    
</style>
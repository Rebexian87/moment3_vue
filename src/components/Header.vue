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

h1{
    text-align: center;
}
nav{
    text-align: center;
}

nav ul{
margin: 0;
padding: 0;
list-style: none;
}

nav li {
    display: inline-block;
    margin-right: -5px;
}

nav ul li a{
display: inline-block;
height: 50px;
line-height: 50px;
background-color: rgba(248, 77, 77, 0.7);
text-decoration: none;
color: #000;
padding: 0 1em 0 1em
}

.router-link-active {
background-color: rgba(248, 77, 77);
font-weight: bold;
}

nav ul li a:hover{
background-color: darkred;
color: white;
}
    
</style>
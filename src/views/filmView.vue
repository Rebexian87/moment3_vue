<template>
    <h2>Filmsida</h2>
    <FilmItem v-for="film in films" :film="film" :key="film._id" @delete-film="deleteFilm"/>
</template>

<script setup>
    import FilmItem from '@/components/FilmItem.vue';
    import { ref, onMounted} from 'vue';

    const films =ref([])

    onMounted(() => {
        console.log("Monuted körs");
        
        getFilms();
    })


    const getFilms = async () => {

        console.log("hejhej");
        
        try {
            const res = await fetch("http://127.0.0.1:3000/films")
            if(res.ok) {
                const data =await res.json();

                films.value = data;
            }
        } catch (error) {
            console.log("Fel uppstod"+error);
            
        }
    }

    const deleteFilm = async (id) => {
      
        console.log(id);
        
        try {
              const res = await fetch("http://127.0.0.1:3000/film/"+id, {
                method: "DELETE"

        });
                 if(res.ok) {

                    console.log("respons ok");
                    getFilms();
                    
                
            }
            
        } catch (error) {
            console.log("Fel uppstod"+error);
        }
    }
</script>

<style scoped>

</style>
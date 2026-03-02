<template>
    <h2>Filmsida</h2>
    <!--When you add a movie the component refreshes so that it shows in the list,-->
    <AddFilm @refresch-films="getFilms"/>
    
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
            <!--Loops through the films-->
            <tr v-for="film in films" :film="film" :key="film._id" >
                <!--Gets the films title, premiereYear and if it is seen or not with the help from the Filmitem.vue, also it makes so you can run the method to delete the film-->
                <FilmItem  :film="film" @delete-film="deleteFilm"/>
            </tr>
        </tbody>
    </table>
    
</template>

<script setup>
    import FilmItem from '@/components/FilmItem.vue';
    import AddFilm from '@/components/AddFilm.vue';
    import { ref, onMounted} from 'vue';

    //Films is a empty array of objects (which are defined/used in components)
    const films =ref([])

    //getFilms runs when the component does
    onMounted(() => {
        console.log("Monuted körs");
        
        getFilms();
    })


    //method for GET the films from the API
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

    //method for POST the film to the API
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

table { 
    margin: auto;
    margin-top: 5%;
    font-size: 1.0em;
    line-height: 120%;
    margin-bottom: 1em;
}

th {
    
    text-align: left;
    padding: 0.3em;
}



 table tbody tr:nth-of-type(even) {
    background-color: rgb(241, 239, 239);
}
 table tbody tr:nth-of-type(odd) {
    background-color: rgb(204, 226, 233);
}


</style>
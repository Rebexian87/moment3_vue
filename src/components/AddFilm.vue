<template>
    <fieldset>
    <legend>Lägg till film</legend>
    <!--Form that you use to add a film-->
    <form @submit.prevent="addFilm">
        <label for="title">Title</label>
        <br> 
        <!--Inputrow with 2-way-binding-->
        <input type="text" name="title" id="title" v-model="title">
              
        <br>
        <label for="premiereYear">År</label>
        <br> 
        <!--Inputrow with 2-way-binding-->
        <input type="number" name="premiereYear" id="premiereYear" v-model="premiereYear">
        <br>
        
        <input type="checkbox" name="seen" id="seen"  v-model="seen">
        <label for="seen">Jag Har sett filmen</label>             
        
        <br>
        <!--Visar titel med hjälp av 2-way-binding.-->
        <p v-if="title">Vill du att {{ title }} läggs till?</p>  
        <input type="submit" value="Lägg till" id="submit">
    </form>
    </fieldset>
    <!--If there is a error a errormessage shows up-->
    <p class="error" v-if="error">{{ error }}</p>
    
</template>

<script setup>

    import { ref } from 'vue';
    
    //Variables that uses ref (reactive data)
    const title = ref("");
    const premiereYear =ref(0);
    const seen = ref(false)
    const error = ref("");

    //Emits so that the film shows up in the list automaticly
    const emits =defineEmits(["refreschFilms"])

    //Method to add a film to the API
    const addFilm = async () => {
              console.log("postpost");
              

              if(title.value.length < 1 ) {
                error.value= "Du måste skriva in en titel";
                return;
              }

               if( premiereYear.value <= 0 ) {
                error.value= "Du måste skriva in ett årtal som är större än 0";
                return;
              }

             
              error.value=""

              const data = {
                title: title.value,
                premiereYear: premiereYear.value,
                seen:seen.value
              }
        try {
            const res = await fetch("http://127.0.0.1:3000/film" , {
                method: "POST",
                headers: {
                    "content-type":"application/json"
                },
                body: JSON.stringify(data)

            })
            if(res.ok) {

                console.log("POST FuNGERAR");

                emits("refreschFilms")

                title.value="";
                premiereYear.value=0;
                seen.value=false;
                
                // const data =await res.json();

                // films.value = data;
            }

        } catch (error) {
            console.log("Fel uppstod"+error);
            
        }
    }
    


</script>

<style scoped>

fieldset {
    width: 20em;
    border-radius: 1em;
    padding: 1.5em;
    font-family: Tahoma, Verdana, sans-serif;
    font-size: 1em;
    margin: auto;
}

legend { 
    border: 0.1em solid rgb(14, 13, 13);
    background-color: rgb(238, 188, 197);
    border-radius: 1em;
    padding: 0.5em;
    margin: auto;
}

input {
    margin-bottom: 1em;
}

#submit{
    padding: 1em;
    margin-top: 0.5em;
}

</style>
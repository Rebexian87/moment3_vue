<template>
    <form @submit.prevent="addFilm">
        <label for="title">Title</label>
        <br> 
        <input type="text" name="title" id="title" v-model="title">
        <br>
        <label for="premiereYear">År</label>
        <br> 
        <input type="number" name="premiereYear" id="premiereYear" v-model="premiereYear">
        <br>
        <label for="seen">Har de sett den</label>
        <br> 
        <input type="checkbox" name="seen" id="seen" v-model="seen">
        <br>
        <input type="submit" value="Lägg till">
    </form>
    <p class="error" v-if="error">{{ error }}</p>
</template>

<script setup>
    import { ref } from 'vue';
    const title = ref("");
    const premiereYear =ref(0);
    const seen = ref(false)
    const error = ref("");

    const emits =defineEmits(["refreschFilms"])

    const addFilm = async () => {
              console.log("postpost");
              if(title.value.length < 4) {
                error.value= "Du måste skriva in minst 4 tecken";
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
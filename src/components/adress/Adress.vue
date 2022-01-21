<template>
    <section class="adress">
       <navigation></navigation>
       <div>
           <h2 class="adress__title">Onde nos encontrar:</h2>
           <p>Endereço completo</p>
       </div>
    </section>
</template>
<script>
import Navigation from "../shared/navigation/Navigation.vue"
export default {
   components:{
       Navigation
   }
}
</script>
<style scoped>
    .adress__title{
        font-family: var(--titulo);
    }
    .adress p{
        font-family: var(--texto);
    }
</style>
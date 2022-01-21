<template>
    <section>
        <navigation></navigation>
        <div class="contatc">
            <h2 class="contact__title">Contato</h2>
            <p>Telefone: 41 11111 11111</p>
            <p>Email: stephania.salviano@hotmail.com</p>
            <h3 class="contact__subtitle">Acompanhe-nos também em nossas redes sociais:</h3>
            <p>Instagram: </p>
            <p>Facebook: </p>
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
    .contact__title{
        font-family: var(--titulo);
    }
    .contact__subtitle{
        font-family: var(--titulo);
    }
    .contact p{
        font-family: var(--texto);
    }
</style>
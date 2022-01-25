<template>
  <section class="adress">
    <navigation></navigation>
    <div class="adress__content">
      <h2 class="adress__title">Onde nos encontrar:</h2>
      <div class="adress__location">
            <p>Endereço:</p>
            <p>Rua Leonardo da Vinci, 28 - 6 a - Guabirotuba - Curitiba/PR</p>
            <p>CEP: 81510-390</p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.1218566243433!2d-49.2433524849851!3d-25.467606183771057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce527ad4374a5%3A0x3c8cf52df3bc2312!2sR.%20Leonardo%20da%20Vinci%2C%2028%20-%20Guabirotuba%2C%20Curitiba%20-%20PR%2C%2081510-390!5e0!3m2!1spt-BR!2sbr!4v1642802151849!5m2!1spt-BR!2sbr"
        width="600"
        class="adress__map"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
    <ending></ending>
  </section>
</template>
<script>
import Navigation from "../shared/navigation/Navigation.vue";
import Footer from "../shared/footer/Footer.vue"
export default {
  components: {
    Navigation,
    'ending': Footer
  },
};
</script>
<style scoped>
.adress__title {
  font-family: var(--titulo);
  width: 100%;
}
.adress__location{
    display: flex;
    flex-direction: column;
    margin: 2rem;
    width: 100%;
}
.adress p {
    margin: 0;
    font-family: var(--texto);
}
.adress__content{
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.adress__map{
    margin: 10px;
}
</style>
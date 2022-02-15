<template>
  <section class="attractiveness">
    <h2>Por que fazer Pilates no Elevare?</h2>
    <div class="attractiveness__text__foto">
      <img src="static/elbow.jpg" alt="" />
      <p>
        No Elevare você pode contar com uma profissional altamente
        qualificada e em constante atualização, que trabalha de forma
        humanizada, entendendo que cada praticante é visto como um ser
        biopsicossocial, levando em consideração não somente sua disfunção como
        sua parte intrínseca também, além de considerá-lo como um ser ÚNICO.
      </p>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.attractiveness {
  display: flex;
  flex-direction: column;
  margin: 2rem;
}
.attractiveness h2 {
  color: var(--cinza-logo);
  font-family: var(--titulo);
  font-size: 2rem;
  text-align: center;
  width: 100%;
}
.attractiveness img {
  object-fit: cover;
  width: 20rem;
}
.attractiveness__text__foto {
  display: flex;
}
.attractiveness__text__foto p {
  font-family: var(--texto);
  margin-left: 2rem;
}
@media screen and (max-device-width: 900px) {
  .attractiveness__text__foto {
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .attractiveness__text__foto img {
    margin: 2em;
    width: 70%;
  }
  .attractiveness h2 {
    font-size: 5em;
  }
  .attractiveness__text__foto p {
    font-size: 2.8em;
    margin: 0;
  }
}
</style>
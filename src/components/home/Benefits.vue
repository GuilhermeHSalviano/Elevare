<template>
  <section class="benefits">
    <h2>Por que fazer Pilates?</h2>
    <img class="benefits__img" src="static/man-and-woman.jpg" alt="" />
    <p>
      Fazer Pilates é muito mais do que exercitar o corpo e realizar alguns
      exercícios. Poucos sabem, mas o Método surgiu com o propósito de conectar
      corpo e mente, ou seja, não é um exercício qualquer. É chamado de Método
      pelo processo de construção de movimentos, fazendo com que o cliente sinta
      seu corpo presente e construa seus movimentos passando por todos os níveis
      do Pilates (básico, intermediário e avançado). É um Método que QUALQUER
      pessoa pode fazer, desde criança até a terceira idade. Promove
      concentração, aumenta a flexibilidade, fortalecimento muscular, alívio de
      dores e um complexo infinito de benefícios.
    </p>
    <div class="benefits__bar"></div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.benefits {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 2rem;
}
.benefits h2 {
  color: var(--cinza-logo);
  font-family: var(--titulo);
  font-size: 2rem;
  text-align: center;
  width: 100%;
}
.benefits__img {
  object-fit: cover;
  width: 90%;
}
.benefits p {
  font-family: var(--texto);
}
.benefits__bar {
  background-color: var(--rosa-logo);
  display: flex;
  height: 1rem;
  width: 100%;
}
@media screen and (max-device-width: 900px) {
  .benefits {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .benefits p {
    font-size: 2.8em;
  }
  .benefits h2 {
    font-size: 5em;
  }
}
</style>
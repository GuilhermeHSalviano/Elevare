<template>
  <section class="presentation">
    <div class="presentation__professional">
      <img src="static/profissional.jpg" alt="Profissional de pilates" />
      <div class="presentation__professional__text">
        <h2 class="professional__title">A profissional por trás do estúdio:</h2>
        <p>
          Meu nome é Stephania Alves Salviano, sou mineira, tenho 28 anos.
          Possuo graduação em Fisioterapia pela Pontifícia Universidade Católica
          de Minas Gerais – Campus Betim. Tenho formação completa nacional e
          internacional em Pilates pela VOLL PILATES GROUP, a maior Escola de
          Pilates da América Latina e possuo formação em Pilates Avançado pelo
          Studio Corpo e Movimento. Sou proprietária do Elevare Pilates Studio:
          um lugar para elevar a sua saúde e bem estar, buscando harmonia entre
          corpo e mente saudáveis. Sejam bem vindos!
        </p>
      </div>
    </div>
    <div class="presentation__studio">
      <div class="presentation__studio__text">
        <div class="presentation__studio__bar"></div>
        <h2>O estúdio:</h2>
        <p>
          O Elevare Pilates Studio fica localizado em um dos bairros mais
          movimentados da cidade de Curitiba, na Rua Leonardo da
          Vinci, N 28, sala 6 A no Guabirotuba. O local possui estacionamento logo a
          sua frente, o que proporciona maior conforto e segurança aos
          clientes. O Elevare possui um espaço aconchegante e amplo, contando
          com os melhores e mais modernos aparelhos de Studio de Pilates,
          fabricados pela Metalife, empresa que está há 11 anos no mercado,
          levando tecnologia, modernidade e segurança em seus equipamentos.
        </p>
      </div>
      <img src="static/profissionalEAparelho.jpg" alt="" />
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.presentation {
  margin: 3rem 0 3rem 0;
}
.presentation__professional {
  align-items: center;
  display: flex;
  margin: 2rem;
}
.presentation__professional img {
  object-fit: cover;
  width: 15em;
}
.presentation__professional__text {
  margin: 1.5rem;
}
.presentation__professional__text p {
  font-family: var(--texto);
}
.presentation__professional__text h2 {
  color: var(--cinza-logo);
  font-family: var(--titulo);
  font-size: 2rem;
}
.presentation__studio {
  align-items: center;
  display: flex;
  margin: 2rem;
}
.presentation__studio__bar {
  background-color: var(--rosa-logo);
  display: flex;
  height: 1rem;
  width: 100%;
}
.presentation__studio__text {
  margin: 1.5rem;
}
.presentation__studio__text p {
  font-family: var(--texto);
}
.presentation__studio__text h2 {
  color: var(--cinza-logo);
  font-family: var(--titulo);
  font-size: 2rem;
}
.presentation__studio img {
  width: 15em;
}

@media screen and (max-device-width: 900px) {
  .presentation {
    display: flex;
    flex-direction: column;
  }
  .presentation__professional__text h2 {
    font-size: 5em;
  }
  .presentation__studio__text h2 {
    font-size: 5em;
  }

  .presentation p {
    font-size: 2.8em;
  }

  .presentation__professional {
    flex-direction: column;
  }
  .presentation__professional img {
    object-fit: cover;
    width: 50%;
  }
  .presentation__studio {
    flex-direction: column;
  }
  .presentation__studio img {
    width: 50%;
  }
}
</style>
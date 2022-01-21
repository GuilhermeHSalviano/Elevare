<template>
  <section class="presentation">
    <div class="presentation__professional">
      <img src="static/profissional.jpg" alt="Profissional de pilates" />
      <div class="presentation__professional__text">
        <h2>A profissional por trás do estúdio:</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          enim metus, facilisis vitae rutrum et, convallis tincidunt arcu.
          Praesent ut tortor lacinia, rhoncus urna at, auctor lectus. Phasellus
          commodo varius sollicitudin. Fusce nec elit leo. Nam mollis massa
          lectus, vehicula lacinia odio ullamcorper vitae. Etiam consequat eget
          risus et convallis. Praesent sodales, arcu ac mattis pharetra, lorem
          justo sodales eros, a auctor ligula ligula a lorem. Pellentesque
          pharetra ultrices egestas. Vestibulum nec fringilla ante. Mauris
          pharetra nisl vitae felis dignissim
        </p>
      </div>
    </div>
    <div class="presentation__studio">
        <div class="presentation__studio__text">
            <div class="presentation__studio__bar"></div>
            <h2>O estúdio:</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum enim
                metus, facilisis vitae rutrum et, convallis tincidunt arcu. Praesent ut
                tortor lacinia, rhoncus urna at, auctor lectus. Phasellus commodo varius
                sollicitudin. Fusce nec elit leo. Nam mollis massa lectus, vehicula
                lacinia odio ullamcorper vitae. Etiam consequat eget risus et convallis.
                Praesent sodales, arcu ac mattis pharetra, lorem justo sodales eros, a
                auctor ligula ligula a lorem. Pellentesque pharetra ultrices egestas.
                Vestibulum nec fringilla ante. Mauris pharetra nisl vitae felis
                dignissim
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
  width: 15rem;
}
.presentation__professional__text {
  margin: 1.5rem;
}
.presentation__professional__text p{
  font-family: var(--texto);
}
.presentation__professional__text h2{
  color: var(--cinza-logo);
  font-family: var(--titulo);
  font-size: 2rem;
}
.presentation__studio{
    align-items: center;
    display: flex;
    margin: 2rem;
}
.presentation__studio__bar{
  background-color: var(--rosa-logo);
  display: flex;
  height: 1rem;
  width: 100%;
}
.presentation__studio__text{
  margin: 1.5rem;
}
.presentation__studio__text p{
  font-family: var(--texto);
}
.presentation__studio__text h2{
  color: var(--cinza-logo);
  font-family: var(--titulo);
  font-size: 2rem;
}
.presentation__studio img{
    width: 15rem;
}

</style>
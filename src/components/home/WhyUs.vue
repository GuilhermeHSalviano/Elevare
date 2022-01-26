<template>
  <section class="attractiveness">
    <h2>Por que fazer Pilates na Elevare?</h2>
    <div class="attractiveness__text__foto">
         <img src="static/elbow.jpg" alt="">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum enim
            metus, facilisis vitae rutrum et, convallis tincidunt arcu. Praesent ut
            tortor lacinia, rhoncus urna at, auctor lectus. Phasellus commodo varius
            sollicitudin. Fusce nec elit leo. Nam mollis massa lectus, vehicula
            lacinia odio ullamcorper vitae. Etiam consequat eget risus et convallis.
            Praesent sodales, arcu ac mattis pharetra, lorem justo sodales eros, a
            auctor ligula ligula a lorem. Pellentesque pharetra ultrices egestas.
            Vestibulum nec fringilla ante. Mauris pharetra nisl vitae felis dignissim
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum enim
            metus, facilisis vitae rutrum et, convallis tincidunt arcu. Praesent ut
            tortor lacinia, rhoncus urna at, auctor lectus. Phasellus commodo varius
            sollicitudin. Fusce nec elit leo. Nam mollis massa lectus, vehicula
            lacinia odio ullamcorper vitae. Etiam consequat eget risus et convallis.
            Praesent sodales, arcu ac mattis pharetra, lorem justo sodales eros, a
            auctor ligula ligula a lorem. Pellentesque pharetra ultrices egestas.
            Vestibulum nec fringilla ante. Mauris pharetra nisl vitae felis dignissim
            </p>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
    .attractiveness{
        display: flex;
        flex-direction: column;
        margin: 2rem;
    }
    .attractiveness h2{
        color: var(--cinza-logo);
        font-family: var(--titulo);
        font-size: 2rem;
        text-align: center;
        width: 100%;
    }
    .attractiveness img{
        object-fit: cover;
        width: 20rem;
    }
    .attractiveness__text__foto{
        display: flex;
    }
    .attractiveness__text__foto p{
        font-family: var(--texto);
        margin-left: 2rem;
    }
    @media screen and (max-device-width: 900px){
        .attractiveness__text__foto{
            align-items: center;
            flex-direction: column;
            justify-content: center;
        }
        .attractiveness__text__foto img{
            width: 70%;
        }
        .attractiveness h2{
            font-size: 5em;
        }
        .attractiveness__text__foto p{
            font-size: 2.8em;
            margin: 0;
        }
    }
</style>
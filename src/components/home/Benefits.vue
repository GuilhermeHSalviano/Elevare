<template>
  <section class="benefits">
    <h2>Por que fazer Pilates?</h2>
    <img src="static/man-and-woman.jpg" alt="">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis lacus
      lectus. Integer ultricies blandit augue, id vehicula sapien lacinia eget.
      Aenean nunc felis, venenatis vel pulvinar eu, consequat non tellus. Ut
      pulvinar iaculis ipsum, ac iaculis eros faucibus vitae. Aliquam hendrerit,
      lacus ut faucibus scelerisque, nisi magna viverra dolor, nec lobortis sem
      tortor a arcu. Nulla blandit, ante in hendrerit blandit, eros mi luctus
      lectus, non fringilla magna nulla sit amet justo. Aliquam ac quam sem.
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
      cubilia curae; Curabitur dictum semper elit. Curabitur ac mattis libero.
      Integer et elit non sapien aliquet eleifend a vel quam. Duis laoreet sem
      risus, at finibus elit sollicitudin eu. Quisque ex ex, imperdiet in
      dignissim sed, scelerisque ac ligula. Vivamus a enim malesuada, lobortis
      est et, mattis neque. Morbi efficitur libero nec orci mollis tempus.
      Integer rutrum viverra leo nec vulputate. Aenean tincidunt porta erat quis
      gravida. Suspendisse potenti. Pellentesque bibendum iaculis diam at
      pharetra. Cras sed dapibus dui. Duis sit amet pretium quam. Aenean tempor
      odio nibh, eu aliquam augue tincidunt tempus. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Donec non maximus ligula. Duis et commodo
      velit, quis ullamcorper mauris. Curabitur et mi rhoncus risus sodales
      sagittis at in ligula. Quisque molestie viverra nulla eget consectetur.
      Aenean eget diam urna. Sed pharetra erat libero. In auctor interdum sem,
      vitae faucibus sapien rhoncus quis. Suspendisse sit amet lobortis ligula,
      nec luctus tellus. Ut fringilla tempor orci eu posuere. In nec varius.
    </p>
    <div class="benefits__bar"></div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
    .benefits{
        display: flex;
        flex-direction: column;
        margin: 2rem;
    }
    .benefits h2{
        color: var(--cinza-logo);
        font-family: var(--titulo);
        font-size: 2rem;
        text-align: center;
        width: 100%;
    }
    .benefits p{
        font-family: var(--texto);
    }
    .benefits__bar{
        background-color: var(--rosa-logo);
        display: flex;
        height: 1rem;
        width: 100%;
    }
    @media screen and (max-device-width: 900px){
        .benefits p{
            font-size: 30px;
        }
        .benefits h2{
            font-size: 60px;
        }
    }
</style>
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("./assets/reset.css");
@import url("./assets/variables.css");
@import url("https://fonts.googleapis.com/css2?family=Baloo+2&family=Cantarell&family=Josefin+Slab&family=Sacramento&family=Sarabun:wght@200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Baloo+2&family=Cantarell&family=Josefin+Slab&family=Montserrat&family=Sacramento&family=Sarabun:wght@200&display=swap");

::-webkit-scrollbar {
  width: 13px;
}

::-webkit-scrollbar-track {
  background: var(--rosa-logo);
}

::-webkit-scrollbar-thumb {
  background: #dab9af;
}

::-webkit-scrollbar-thumb:hover {
  background: #cc9d8f;
}
</style>

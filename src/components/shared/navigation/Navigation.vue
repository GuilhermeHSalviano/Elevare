<template>
    <header class="navigation">
        <img src="static/logotipo.jpg" alt="logotipo">
        <nav class="navigation__menu">
            <ul class="menu__links">
                <li>Home</li>
                <li>Artigos</li>
                <li>Galeria</li>
                <li>Contato</li>
                <li>Endereço</li>
            </ul>
        </nav>
    </header>
</template>
<script>
export default {
}
</script>
<style scoped>
    .navigation{
        align-items: center;
        background-color: #e9d6d0;
        border-bottom: solid;
        border-color: #7c817a;
        box-shadow: 3px 3px 5px  #7c817a;
        display: flex;
        flex-direction: row;
        height: 10rem;
        justify-content: center;
        width: 100%;
    }
    .navigation img{
        object-fit: cover;
        width: 16.5%;
    }
    .navigation__menu{
        display: flex;
        height: 3rem;
        width: 100%;
    }
    .menu__links{
        display: flex;
        justify-content: space-around;
        list-style: none;
        width: 100%;
    }
    .menu__links li{
        color: #7c817a;
    }
</style>
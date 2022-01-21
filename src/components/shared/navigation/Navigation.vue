<template>
    <header class="navigation">
        <router-link to="/"><img src="static/logotipo.jpg" alt="logotipo"></router-link>
        <nav class="navigation__menu">
            <ul class="menu__links">
                <router-link to="/">Home</router-link>
                <li>Artigos</li>
                <li>Galeria</li>
                <router-link to="/contato">Contato</router-link>
                <router-link to="/endereco" class="link">Endereço</router-link>
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
        background-color: var(--rosa-logo);
        display: flex;
        flex-direction: row;
        height: 10rem;
        justify-content: center;
        width: 100%;
    }
    .navigation img{
        object-fit: cover;
        width: 15.5rem;
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
    .menu__links {
        color: #7c817a;
        font-family: var(--texto);
    }
    .menu__links a{
        text-decoration: none;
        transition-property: text-decoration;
        transition-duration: 3s;
        transition-delay: 3s;
    }
    .menu__links a:visited{
        color: var(--cinza-logo);
        text-decoration: none;
    }
    .menu__links a:hover{
        text-decoration: underline;     
    }
    
</style>
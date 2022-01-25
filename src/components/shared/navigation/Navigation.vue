<template>
    <header class="navigation">
        <router-link to="/"><img src="static/logotipo.jpg" alt="logotipo"></router-link>
        <nav class="navigation__menu">
            <ul class="menu__links">
                <li class="menu__links__container">
                    <router-link to="/">Home</router-link>
                    <span></span>
                </li>
                <li class="menu__links__container">
                    <router-link to="/">Artigos</router-link>
                    <span></span>
                </li>
                <li class="menu__links__container">
                    <router-link to="/">Galeria</router-link>
                    <span></span>
                </li>
                <li class="menu__links__container">
                    <router-link to="/contato">Contato</router-link>
                    <span></span>
                </li>
                <li class="menu__links__container">
                    <router-link to="/endereco" class="link">Endereço</router-link>
                    <span></span>
                </li>
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
        width: 14.5rem;
    }
    .navigation__menu{
        display: flex;
        height: 100%;
        width: 100%;
    }
    .menu__links{
        align-items: center;
        display: flex;
        justify-content: space-around;
        list-style: none;
        margin: 0;
        width: 100%;
    }
   
    .menu__links a{
        color: #7c817a;
        font-family: var(--texto);
        text-decoration: none;
        font-size: 1rem;
        margin-top: 7rem;
    }
    .menu__links a:hover{
        opacity: 50%;
    }
    .menu__links a:visited{
        color: var(--cinza-logo);
        text-decoration: none;
    }

    .menu__links__container{
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        height: 100%;
    }

    .menu__links__container:hover > span{
        transition-property: all;
        transition-duration: 0.5s;
        transition-timing-function: ease-in;
        height: 100%;
        background-color: #e7c0c2;
        width: 100%;
    }

    @media screen and (max-device-width: 900px) {
        .navigation{
            display: flex;
            flex-direction: column;
            height: auto;
        }
        .navigation img{
            width: 100%;
        }
        .menu__links{
            flex-direction: column;
        }
        .menu__links a{
            font-size: 4rem;
            margin: 2rem;
        }
    }
    
   
    
</style>
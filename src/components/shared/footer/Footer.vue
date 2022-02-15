<template>
    <footer class="ending">
        <div class="ending__media">
            <h3 class="media__title">Visite-nos em nossas redes sociais:</h3>
            <a href="https://www.instagram.com/elevare.pilatesstudio/?utm_medium=copy_link"><i class="fab fa-instagram icons"></i></a>
        </div>
    </footer>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .ending{
        align-items: flex-end;
        background-color: var(--rosa-logo);
        display: flex;
        height: 10rem;
        justify-content: end;
    }
    .ending__media{
        display: flex;
        height: 40%;
        width: 30%;
    }
    .media__title{
        color: var(--cinza-logo);
        font-family: var(--titulo);
    }
    .icons{
        color: var(--cinza-logo);
        font-size: 1.7em;
        margin: 0 0.2em 0 0.2em;
    }
    
    @media screen and (max-device-width: 900px){
        .ending{
            flex-direction: column;
        }
        .ending__media{
            align-items: center;
            display: flex;
            margin-bottom: 2em;
            justify-content: center;
            width: 100%;
        }
        .media__title{
            font-size: 2.5em;
        }
        .icons{
            font-size: 3em;
            margin: 0 0.5em 0 0.5em;
        }
    }

</style>
<template>
    <section class="container">
        <navigation></navigation>
        <div class="contact">
            <h2 class="contact__title">Contato</h2>
            <p class="contact__p">Telefone: 41 11111 11111</p>
            <p class="contact__p">Email: stephania.salviano@hotmail.com</p>
            <h3 class="contact__subtitle">Acompanhe-nos também em nossas redes sociais:</h3>
            <div class="contact__instagram">
                <p class="contact__p">Instagram:</p>
                <a href="https://www.instagram.com/elevare.pilatesstudio/?utm_medium=copy_link" class="contact__instagram__link contact__p">elevare.pilatesstudio</a>
            </div>
            <p class="contact__p">Facebook</p>
        </div>
        <form action="https://formsubmit.co/guilherme.salviano@hotmail.com" class="contact__form" method="POST">
            <h2 class="form__title">Você pode ainda nos mandar uma mensagem!</h2>
            <label class="form__label"for="name">Nome</label>
            <input type="text" id="name" name="name">
            <label class="form__label" for="email">E-mail</label>
            <input type="email" id="email" name="email">
            <label class="form__label" for="massage">Mensagem</label>
            <textarea id="message" placeholder="Escreva sua mensagem aqui" wrap="hard" cols="20" name="message"></textarea>
            <button type="submit" name="submit" class="form__button">Enviar</button>
        </form>
        <ending class="ending"></ending>
    </section>
</template>
<script>
import Navigation from "../shared/navigation/Navigation.vue"
import Footer from "../shared/footer/Footer.vue"
export default {
    components:{
        Navigation,
        'ending': Footer
    }
}
</script>
<style scoped>
    .container{
        display: flex;
        flex-direction: column;
    }
    .contact{
        display: flex;
        flex-direction: column;
        margin: 10px;
    }
    .contact__title{
        font-family: var(--titulo);
    }
    .contact__subtitle{
        font-family: var(--titulo);
    }
    .contact p{
        font-family: var(--texto);
    }
    .contact__instagram{
        align-items: center;
        display: flex;
    }
    .contact__instagram__link{
        color: black;
        margin-left: 5px;
        text-decoration: none;
    }
    .contact__instagram__link:hover{
        opacity: 75%;
    }
    .ending{
        margin-top: 20px;
    }
   .contact__form{
       display: flex;
       flex-direction: column;
       margin: 10px;
       width: 100%;
   }
   #name{
       margin: 5px 5px;
       width: 20%;
   }
   #email{
       margin: 5px 5px;
       width: 20%;
   }
   #message{
        margin: 5px 5px;
       height: 5rem;
       width: 20%;
   }
   .form__button{
       font-family: var(--texto);
       background-color: var(--rosa-logo);
       border: none;
       height: 30px;
       margin-top: 2rem;
       width: 80px;
       transition: all 0.3s ease-in-out;
   }
   .form__button:hover{
       cursor: pointer;
       transform: translate(0px, -2px);
       box-shadow: 2px 2px 5px grey;
   }

   @media screen and (max-device-width: 900px){
       .contact__title{
           font-size: 5em;
       }
       .contact__p{
           font-size: 2em;
       }
       .contact__subtitle{
           font-size: 2em;
       }
       .form__title{
           font-size: 5em;
           font-family: var(--titulo);
       }
       .form__label{
           font-size: 2em;
       }
       #name, #email{
           height: 2em;
           width: 80%;
       }

       #message{
           min-height: 10em;
           width: 80%;
       }
       .form__button{
           font-size: 2em;
           height: 3em;
           width: 30%;
       }
   }
</style>
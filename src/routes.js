import Home from "./components/home/Home.vue"
import Adress from "./components/adress/Adress.vue"
import Contact from "./components/contatc/Contact.vue"

export const routes = [
    {path: '', component: Home},
    {path: '/endereco', component: Adress},
    {path: '/contato', component: Contact}
]
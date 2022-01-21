<template>
    <div>
        <navigation></navigation>
        <presentation></presentation>
        <benefits></benefits>
        <why-us></why-us>
        <ending></ending>
    </div>
</template>
<script>
import Navigation from "../shared/navigation/Navigation.vue"
import Presentation from "./Presentation.vue"
import Benefits from "../home/Benefits.vue"
import WhyUs from "../home/WhyUs.vue"
import Footer from "../shared/footer/Footer.vue"
export default {
    components:{
        Navigation,
        Presentation,
        Benefits,
        WhyUs,
        'ending': Footer
    }
}
</script>
<style scoped>

</style>
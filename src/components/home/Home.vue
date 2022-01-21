<template>
    <div>
        <navigation></navigation>
        <presentation></presentation>
    </div>
</template>
<script>
import Navigation from "../shared/navigation/Navigation.vue"
import Presentation from "./Presentation.vue"
export default {
    components:{
        Navigation,
        Presentation
    }
}
</script>
<style scoped>

</style>
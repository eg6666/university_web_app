<template>
    <page-template-8 :data="data"> </page-template-8>
</template>

<script>
import PageTemplate8 from '../templates/page-template-8.vue';
import data from "./data.8.js";
export default {
    name: "Fakulteti",
    components: {
    PageTemplate8
    },
    data () {
        return {
            data: data
        }
    }
}
</script>
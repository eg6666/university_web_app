<template>
    <page-template-2 :data="data"> </page-template-2>
</template>

<script>
import PageTemplate2 from '../templates/page-template-2.vue';
import data from "./data.2.js";
export default {
    name: "Student",
    components: {
    PageTemplate2
    },
    data () {
        return {
            data: data
        }
    }
}
</script>
<template>
    <page-template-6 :data="data"></page-template-6>
</template>

<script>
import PageTemplate6 from '../templates/page-template-6.vue'
import data from "./data.6";

export default {
    name: "NewsArchive",
    components: {
        PageTemplate6
    },
    data () {
        return {
            data: data
        }
    }
}
</script>
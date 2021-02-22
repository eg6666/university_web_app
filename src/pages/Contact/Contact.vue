<template>
    <page-template-4 :data="data"></page-template-4>
</template>

<script>
    import PageTemplate4 from "../templates/page-template-4.vue";
    import data from "./data.4";


    export default {
        name: "Contact",
        components: {
            PageTemplate4,
        },
        data() {
            return {
                data: data,
            };
        },
    };
</script>

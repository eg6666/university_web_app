<template>
    <page-template-5 :data="data"></page-template-5>
</template>

<script>
    import PageTemplate5 from "../templates/page-template-5.vue";
    import data from "./data.5";


    export default {
        name: "Faqs",
        components: {
            PageTemplate5,
        },
        data() {
            return {
                data: data,
            };
        },
    };
</script>

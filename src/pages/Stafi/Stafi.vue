<template>
    <page-template-12 :data="data"></page-template-12>
</template>

<script>
    import PageTemplate12 from "../templates/page-template-12";
    import data from "./data.12";

    export default {
        name: "Stafi",
        components: {
            PageTemplate12
        },
        data() {
            return {
                data: data,
            };
        },
    }
</script>

<style scoped>

</style>

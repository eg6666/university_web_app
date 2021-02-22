<template>
    <h2 class="title-section" :style="data.color && `color: ${data.color}`">{{data.title}}</h2>
</template>

<script>
export default {
    name: 'Title',
    props: {
        data: Object,
    }
}
</script>

<style scoped>
.title-section {
    font-family: sans-serif;
    font-size: 50px;
    font-weight: 900;
    margin: 1em 0;
    text-align: center;
    line-height: 1.3;
}
@media (max-width:640px){
    .title-section {
        font-size: 35px;
    }
}
</style>
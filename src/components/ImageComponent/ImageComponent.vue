<template>
<img :src="data.isOuterLink ? data.src : require(`@/assets/${data.src}`)" :alt="data.alt">
</template>

<script>
export default {
    name:"ImageComponent",
    props:{
        data: Object,
    }
}
</script>

<style scoped>
img {
	max-width: 100%;
	height: auto;
}
</style>
<template>
    <div class="cardContainer">
        <CardComponent class="col" :key="card.title" v-for="card in data" :data="card" />
    </div>
</template>
<script>
import CardComponent from "@/components/CardComponent/CardComponent.vue";

export default {
    name: "Card",
    components:{
        CardComponent
    },
        props: {
        data:Array
    }
}
</script>
<style scoped>
.cardContainer{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 20px;
}
</style>
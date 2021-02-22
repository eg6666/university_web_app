<template>
    <div class="link-btn">
        <Paragraph :data="data.text" />
        <DefaultButton :data="data.button" />
    </div>
</template>
<script>
import Paragraph from '@/components/Paragraph/Paragraph.vue'
import DefaultButton from '@/components/DefaultButton/DefaultButton.vue'
export default {
    name: "LinkButton",
    components: { Paragraph,DefaultButton},
    props:{
        data:Object
    }
}
</script>
<style scoped>
.link-btn{
    display: flex;
    flex-direction: row;
    align-content: center;
    margin-bottom: 40px;
}
.link-btn p{
    margin: 0;
    margin-right: 50px;
}
@media (max-width:840px){
    .link-btn{
    justify-content: space-between;
}
    .link-btn p{
        margin: 0;
    }
}
</style>
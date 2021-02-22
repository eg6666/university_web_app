<template>
    <p> 
        <i v-if="data.italic">
            {{data.content}}
        </i>
        <strong v-else-if="data.bold">
            {{data.content}}
        </strong>
        <font v-else>
            {{data.content}}
        </font>
    </p>
</template>

<script>
export default {
    name: "Paragraph",
    props: {
        data: Object,
    }
}
</script>
<style scoped>
p{
    font-size: 20px;
}
@media (max-width:640px) {
    p{
    font-size: 15px;
    }
}
</style>
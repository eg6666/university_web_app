<template>
    <h3 class="subtitle">{{data.text}}</h3>
</template>

<script>
export default {
    name: "Subtitle",
    props: {
        data: Object
    }
}
</script>

<style scoped>
.subtitle {
  background: #222;
  color: #fff;
  font-family: sans-serif;
  font-size: 28px;
  line-height: 1;
  padding: 0.2em 0.5em;
  margin-bottom: 1em;
}
@media (max-width:640px){
    .subtitle {
        font-size: 20px;
    }
}
</style>
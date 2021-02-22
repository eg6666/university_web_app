<template>
<div class="effect_btn">
   <RouterLink v-if="data.link && !data.isOuterLink" :to="data.link" class="btn" :style="data.width && `width: ${data.width}%`">
    {{data.title}}
   </RouterLink>
   <a v-if="!data.link && data.isOuterLink" :href="data.isOuterLink" class="btn" :style="data.width && `width: ${data.width}%`">
    {{data.title}}
   </a>
</div>
</template>

<script>
export default {
    name: 'EffectButton',
    props: {
        data: Object
    }
}
</script>

<style scoped>
.effect_btn {
    display: flex;
    justify-content: center;
    margin-bottom: 2em;
}

.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    padding: 0.7em 1.5em;
    background-color: #750202;
    border: 2px solid #750202;
    position: relative;
    overflow: hidden;
    z-index: 1;
    font-weight: 600;
    font-size: 20px;
    line-height: 1;
    color: #f7f7f7;
}

.btn:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    height: 0;
    width: 100%;
    background: white;
    opacity: 0;
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    transition: 0.3s;
    z-index: -1;
}

.btn:hover {
    color: #750202;
}

.btn:hover:after {
    height: 500%;
    opacity: 1;
}
</style>
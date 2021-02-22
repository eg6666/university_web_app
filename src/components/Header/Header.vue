<template>
<header class="header">
    <div class="header_wrap">
        <MainHeader />
        <NavLinks />
    </div>
</header>
</template>

<script>
import MainHeader from "@/components/MainHeader/MainHeader.vue";
import NavLinks from "@/components/NavLinks/NavLinks.vue";

export default {
    name: "Header",
    components: {
        MainHeader,
        NavLinks
    }
}
</script>

<style scoped>
.header {
    display: block;
    position: sticky;
    top: 0;
    left: 0;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    color: #1f1d21;
    background-color: white;
    z-index: 1000;
    width: 100%;
}

@media (min-width: 1000px) {
    .header {
        box-shadow: 0px 1px 5px rgba(0,0,0,0.1);
    }
}

header_wrap {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    height: inherit;
    transition: height .6s;
}
</style>
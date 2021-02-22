<template>  
<div class="col-8 component_container">
    <div :class=" data.rounded ? 'info_card_rounded' : 'info-card'">
        <RouterLink :to="{name:data.page,hash:data.element}" class="col-12 p-0 info-card__img">
            <img :src="data.imgSrc" class="col-12 p-0" alt="Foto nuk u gjet"/>
        </RouterLink>

        <RouterLink :to="{name:data.page,hash:data.element}" class="info-card__link">
            <span>{{data.text}}</span>
        </RouterLink>
    </div>
</div>
</template>

<script>
export default {
    name: 'NewsComponent',
    props: {
        data : Object
    }
}
</script>

<style lang="scss" scoped>
.component_container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    color:white;
    margin-bottom: 40px;
}

.info-card,
.info_card_rounded {
    display: flex;
    flex-direction: column;
    max-width: fit-content;
    img {
    @media (min-width:500px) {
    max-width: 270px;
    max-height: 270px;
        }
    }
        transition: transform 0.5s;
}


.info-card__img {
    display: block;
    margin-bottom: 5px;
    overflow: hidden;
}

@media (min-width:840px) {
    .info-card__img {
        margin-bottom: 20px;
    }
}

.info-card__img img {
    transition: transform .4s;
}

.info-card__img:hover img {
    transform: scale(1.1)
}

.info-card__link {
    display: block;
    font-size: 14px;
    margin-left: 1em;
    color: inherit;
    position: relative;
    text-align: left;
    cursor: default;
}

.info-card__link span {
    max-width: fit-content;
    border-bottom: 1px solid transparent;
    transition: border-color 0.3s;
    margin-left: 25px;
    color: inherit;
    cursor: pointer;
    @media (max-width:500px) {
        display:block;
        text-align: center;
    }
    &::before {
        content: "";
        display: block;
        position: absolute;
        width: 0.5em;
        height: 0.5em;
        border-right: 1px solid white;
        border-top: 1px solid white;
        top: 0.5em;
        left: 1em;
        transform: rotate(45deg);
        transition: transform 0.3s;
    }
    &:hover {
        border-color: inherit;
        &::before {
            transform: rotate(45deg) translate(0.4em, -0.4em);
        }
    }
}

@media (min-width:500px) {
    .info-card__link {
        font-size: 18px;
    }
}

.info_card_rounded .info-card__link {
    text-align: center;
    margin: 0;
    padding-right: 1em;
    span::before {
        left: 0.5em;
    }
}

.info_card_rounded .info-card__img {
    border-radius: 50%;
}
</style>
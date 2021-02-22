<template>
    <div class="container">
        <div :key="info.title" v-for="info in data.info" class="list-items_box" >
            <h2 class="list-items_title" v-bind:style="{'width':info.width}">
                {{info.title}}
            </h2>
            <ul class="list-items_lists">
                <li :key="item" v-for="item in info.item" class="list-items_item"
                v-bind:style="{'list-style':data.list}" >
                    {{item}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "listItems",
    props: {
        data:Object
    }
};
</script>

<style scoped>
    .list-items_box{
        font-family: Open Sans,sans-serif;
        font-weight: 400;
        line-height: 1.5;
        text-align: left;
        color: #000;
        font-size: 16px;
        box-sizing: border-box;
        margin: 40px 0;
    }
    @media (max-width:640px) {
        .list-items_box{
            font-size:12px;
        }
         .list-items_title{
            font-size: 18px;
         }
    }
    .list-items_title{
        margin: 0;
        margin-bottom: 5px;
        font-weight: 700;
        font-size: 22px;
        padding-bottom: 5px;
        border-bottom: 4px solid #750202;
    }
    .list-items_lists{
        padding: 0;
        margin: 0;
    }
    .list-items_lists li{
        line-height: 2;
    }
</style>

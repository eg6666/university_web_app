<template>
    <div>
        <preloader v-if="loading"/>
        <Title :data="titleData" />
        <div :key="info.id" v-for="info in results">
                <card-component :data="info"/>
        </div>
    </div>
</template>
<script>
import Title from '../../components/Title/Title.vue'
import CardComponent from '../../components/CardComponent/CardComponent.vue'
import Preloader from '../../components/Blog/Preloader.vue'
import moment from "moment"
export default {
    name: "SearchNews",
    components: {Title,CardComponent,Preloader},
    data(){
        return {
            titleData:{
                title: "Rezultati i kerkimit",
                color: "#750202",
            },
            results: [],
            loading: false,
        }
    },
    async created() {
        try {
            this.loading = true
            const res = await this.$api.blog.search(this.$route.params.value)
            console.log(res.data)
            this.results = res.data.map(p => {
                return {
                    ...p,
                    fullCard: true,
                    content: `${p.content.replace(/<[^>]*>/g, " ").substring(0, 100)}...`,
                    date: moment(p.created_at).format("DD/MM/YYYY"),
                    to:"/",
                    url: `https://image.freepik.com/free-photo/3d-abstract-background-with-low-poly-lines_1048-12367.jpg`,
                }
            })
             this.loading = false
        }
        catch (err) {
            console.log(err)
            this.$notify({
                    group: "error",
                    title: "Error",
                    text: `Pati një problem. Ju lutem provoni përsëri.`,
                    type: "error",
                })
        }
    },
}
</script>
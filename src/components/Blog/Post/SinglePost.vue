<template>
    <preloader v-if="loading" />
    <div class="single-blog-post" v-else>
        <h2><strong>{{post.title}}</strong></h2>
        <p>{{post.created_at | format}}</p>
        <hr/>
        <div class="content" v-html="post.content"/>
    </div>
</template>

<script>
import Preloader from '../Preloader.vue'
import moment from "moment"

export default {
    name: "SinglePost",
    components: {Preloader},
    data() {
        return {
            loading: false,
            post: {},
        }
    },
    async created() {
        try {
            this.loading = true
            const res = await this.$api.blog.getPostByID(this.$route.params.id)
            this.post = res.data
            this.loading = false
        } catch (err) {
            this.$notify({
                    group: "error",
                    title: "Error",
                    text: `Pati një problem. Ju lutem provoni përsëri.`,
                    type: "error",
                })
        }
    },
    filters: {
        format(date) {
            return moment(date).format("DD/MM/YYYY")
        }
    }
}
</script>

<style lang="scss">
.single-blog-post {
    width: 100%;
    margin: 0 auto;
    padding: 80px 55px;
    border-left: 200px solid rgb(248, 248, 248);
    border-right: 200px solid rgb(248, 248, 248);
}
</style>
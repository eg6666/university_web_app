<!-- eslint-disable vue/no-parsing-error -->
<template>
    <preloader v-if="loading"/>
    <div class="m-5" v-else>
        <h3><strong>Postimet</strong></h3>
        <hr/>
        <div class="my-posts">
            <b-card
                v-for="post in posts"
                :key="post.id"
                :title="post.title"
                :img-src="`https://source.unsplash.com/300x200?sig=${post.id}&abstarct`"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
            >
                <b-card-text style="min-height: 110px">{{`${post.content.replace(/<[^>]*>/g, " ").substring(0, 100)}...`}}</b-card-text>

                <b-button block @click="() => modifyPost(post.id)" variant="info">Modifiko</b-button>
                <b-button block @click="() => deletePost(post.id)">Fshi</b-button>
            </b-card>
        </div>
    </div>
</template>

<script>
import Preloader from '../Preloader.vue'
export default {
  components: { Preloader },
    name: "UserPostList",
    data() {
        return {
            loading: false,
            posts: [],
        }
    },
    async created() {
        try {
            if (this.$session.getUser().user_type_id === 1) {
                this.loading = true
                const res = await this.$api.blog.getPosts()
                this.posts = res.data
                this.loading = false
            } else {
                this.loading = true
                const res = await this.$api.blog.getMyPosts()
                this.posts = res.data
                this.loading = false
            }
        } catch (err) {
            console.log(err)
            this.$notify({
                group: "error",
                title: "Error",
                text: `Pati një problem. Ju lutem provoni përsëri.`,
                type: "error",
            })
        }
    },
    methods: {
        modifyPost(id) {
            this.$router.push(`/blog/ndrysho/${id}`)
        },
        async deletePost(id) {
            try {
                await this.$api.blog.deletePost(id)
                this.posts = this.posts.filter(p => p.id !== id)
            } catch(err) {
                console.log(err)
                this.$notify({
                    group: "error",
                    title: "Error",
                    text: `Pati një problem. Ju lutem provoni përsëri.`,
                    type: "error",
                })
            }
        }
    }
}
</script>

<style lang="scss">
.my-posts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1em;
    grid-row-gap: 2em;
}
</style>
<template>
    <div class="post-list">
        <preloader v-if="loading"/>
        <div v-else>
            <div class="banner">
                <p><b>Mirësevini në blog-un e FTI</b></p>
                <div>
                    <b-button style="margin-right: 20px" @click="userPostList" v-if="user_type == 1">Monitoro postimet</b-button>
                    <b-button style="margin-right: 20px" @click="userPostList" v-else>Postimet e mia</b-button>
                    <b-button style="margin-right: 20px" @click="createPost">Krijo një postim</b-button>
                    <b-button style="margin-right: 20px" v-if="user_type == 1" @click="newRegistrations">Regjistrime të reja</b-button>
                    <b-button @click="signOut">Dil nga llogaria</b-button>
                </div>
            </div>
            <div class="content">
                <h2><b>Postimet më të fundit</b></h2>
                <hr />
                <div class="post-list__inner mt-4">
                    <card-component :key="post.id" :data="post" v-for="post in posts"/>
                </div>
                <h2 style="margin-top: 20px"><b>Postime të tjera</b></h2>
                <hr />
                <news-archive :data="secondaryPosts" />
            </div>
        </div>
    </div>
</template>

<script>
import moment from "moment"
import CardComponent from '../../CardComponent/CardComponent.vue'
import Preloader from '../Preloader.vue'
import NewsArchive from '../../NewsArchive/NewsArchive.vue'

export default {
    name: "PostList",
    components: { Preloader, CardComponent, NewsArchive },
    data() {
        return {
            posts: [],
            secondaryPosts: [],
            loading: false,
            user_type: 0
        }
    },
    async created() {
        this.user_type = this.$session.getUser().user_type_id
        try {
            this.loading = true
            const res = await this.$api.blog.getPosts()
            this.posts = res.data.map((p, i) => {
                return {
                    ...p,
                    isBlogPost:true,
                    content: `${p.content.replace(/<[^>]*>/g, " ").substring(0, 100)}...`,
                    date: moment(p.created_at).format("DD/MM/YYYY"),
                    to: `postime/${p.id}`,
                    url: `https://source.unsplash.com/300x300?sig=${i}&abstarct`,
                }
            }).filter((_, i) => i < 4)
            this.secondaryPosts = res.data.map((p, i) => {
                return {
                    ...p,
                    extract: `${p.content.replace(/<[^>]*>/g, " ").substring(0, 200)}...`,
                    date: moment(p.created_at).format("DD/MM/YYYY"),
                    img: `https://source.unsplash.com/300x300?sig=${i}&abstarct`,
                    link: `postime/${p.id}`,
                }
            })
            .filter((_, i) => i >= 4)
            .reduce((acc, item) => {
                acc.items = acc.items ? [...acc.items, item] : [item]
                return acc
            }, {})
            this.loading = false
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
        createPost() {
            this.$router.push({name: 'BlogCreate'})
        },
        newRegistrations() {
            this.$router.push({ name: 'NewRegistrations' })
        },
        userPostList() {
            this.$router.push({ name: "UserPostList" })
        },
        signOut() {
            this.$session.removeToken()
            this.$router.push({name: 'Login'})
        }
    }
}
</script>

<style lang="scss">
.post-list {
    margin: 0 auto;
    padding: 0;

    .banner {
        display: flex;
        color: gray;
        justify-content: space-between;
        padding: 10px 30px;
        align-content: center;
        align-items: center;
        background-color: rgba(247, 247, 247, 0.425);
        box-shadow: 0px 10px 20px rgb(236, 236, 236);
    }

    .content {
        width: 90%;
        margin: 50px auto;
    }

    &__inner {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 30px;
    }
}
</style>
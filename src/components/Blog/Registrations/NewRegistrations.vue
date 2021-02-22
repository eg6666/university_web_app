<template>
    <preloader v-if="loading" />
    <ul class="list-unstyled m-8" v-else>
        <h2>Lista e regjistrimeve të reja</h2>
        <hr />
        <b-media class="mt-4 mb-7" tag="li" :key="user.id" v-for="user in users">
            <template #aside>
                <b-img blank blank-color="#abc" class="mr-5" width="64" alt="placeholder"></b-img>
            </template>
            <h5 class="mt-0 mb-1">{{`${user.fname} ${user.lname}`}}</h5>
            <p class="mb-0">{{`${user.email} në rolin e ${roles[user.user_type_id]}`}}</p>
            <b-button :disabled="approvedUsers.includes(user.id)" @click="registerUser" :id="user.id" block class="mt-2">Aprovo</b-button>
        </b-media>
        <p v-if="users.length == 0" class="mt-2">Nuk ka regjistrime të reja :)</p>
    </ul>
</template>

<script>
import Preloader from '../Preloader.vue'
export default {
  components: { Preloader },
    name: "NewRegistrations",
    data() {
        return {
            users: [],
            loading: false,
            approvedUsers: [],
            roles: {
                1: 'Administrator',
                2: 'Drejtues',
                3: 'Pedagog',
                4: 'Student',
            }
        }
    },
    async created() {
        try {
            this.loading = true
            const res = await this.$api.blog.getNewRegistrations()
            this.users = res.data
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
        async registerUser(e) {
            try {
                await this.$api.blog.giveAccess(e.target.id)
                this.$notify({
                    group: "success",
                    title: "Sukses",
                    text: `Postimi u fshi me sukses`,
                    type: "success",
                })
                this.approvedUsers = [...this.approvedUsers, e.target.id]
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
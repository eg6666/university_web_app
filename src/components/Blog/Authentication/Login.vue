<template>
    <div class="login">
        <div class="login__form">
            <b-form class="login__form__inner">
                <h2>Kyçuni</h2>
                <p>Në blog-un e FTI mund të aksesoni informacione mbi lendët, njoftime dhe postime nga pedagogë apo studentë të tjerë.</p>
                <hr />
                <b-input v-model="email" type="email" placeholder="emri.mbiemri@fti.edu.al" class="login__form__inner__item"/>
                <b-input v-model="password" type="password" placeholder="Password"  class="login__form__inner__item"/>
                <b-button @click="login" block class="login__form__inner__item">Login</b-button>
                <router-link to="/blog/register">Regjistrohu këtu!</router-link>
            </b-form>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        async login() {
            try {
                const res = await this.$api.auth.login(this.email, this.password)
                this.$session.setToken(res.data.access_token)
                this.$router.push({name: "PostList"})
            } catch (err) {
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
.login {
    &__form {
        &__inner {
            width: 50%;
            margin: 100px auto;
            border: 1px solid #eee;
            border-radius: 5px;
            padding: 30px 40px;

            p {
                color: #aaa;
            }

            &__item {
                margin: 15px 0;
            }

            button {
                margin-top: 30px;
            }
        }

        a {
            color: rgb(107, 107, 107);
        }
    }
}
</style>
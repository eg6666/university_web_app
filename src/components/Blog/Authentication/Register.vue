<template>
    <div class="register">
        <div class="register__inner">
            <h2>Regjistrohu</h2>
            <hr/>
            <b-form>
                <b-input v-model="fname" class="register__inner__item" placeholder="Emri"/>
                <b-input v-model="lname" class="register__inner__item" placeholder="Mbiemri"/>
                <b-input v-model="email" class="register__inner__item" placeholder="Email" />
                <b-input v-model="password" class="register__inner__item" type="password" placeholder="Password" />
                <list-items :data="password_info" />
                <b-form-radio-group
                    v-model="gender"
                    :options="options"
                    class="mb-3 register__inner__item"
                    value-field="item"
                    text-field="name"
                ></b-form-radio-group>
                <b-datepicker v-model="birthday" style="all: unset" v-bind="{labelNoDateSelected: 'Ditëlindja'}" class="register__inner__item"/>
                <b-form-select class="register__inner__item" v-model="user_type_id" :options="user_types"></b-form-select>
                <b-form-select class="register__inner__item" v-model="department_id" :options="department_types"></b-form-select>
                <b-button @click="register" class="register__inner__item" block>Dërgo kërkesën për regjistrim</b-button>
                <p class="success" v-if="success">*Kërkesa juaj u dërgua me sukses. Ju lutem prisni për aprovimin.</p>
            </b-form>
        </div>
    </div>
</template>

<script>
import moment from "moment"
import ListItems from '../../ListItems/ListItems.vue'

export default {
  components: { ListItems },
    name: "Register",
    data() {
        return {
            fname: '',
            lname: '',
            birthday: '',
            email: '',
            password: '',
            gender: "M",
            user_type_id: 1,
            department_id: 1,
            success: false,
            user_types: [
                { value: 1, text: 'Administrator' },
                { value: 2, text: 'Drejtues' },
                { value: 3, text: 'Pedagog' },
                { value: 4, text: 'Student' },
            ],
            department_types: [
                { value: 1, text: 'Departamenti i Inxhinierise Informatike' },
                { value: 2, text: 'Departamenti i Elektronikes dhe Telekomunikacionit' },
                { value: 3, text: 'Departamenti i Bazave te Informatikes' },
            ],
            options: [
                { item: 'M', name: 'Mashkull' },
                { item: 'F', name: 'Femër' },
            ],
            password_info:{
                list: "circle",
                info: [{
                        title: "Password duhet të përmbajë të paktën:",
                        width: "100%",
                        item: [
                            "8 karaktere",
                            "1 shkronjë të madhe",
                            "1 shkronjë të vogël",
                            "1 numër",
                            "1 nga simbolet ( \" !@#$. \" )",
                        ]
                }]
            }

        }   
    },
    methods: {
        async register() {
            try {
                const payload = {
                    gender: this.gender,
                    user_type_id: this.user_type_id,
                    department_id: this.department_id,
                    password: this.password,
                    email: this.email,
                    birthday: moment(this.birthday).format("YYYY-MM-DD"),
                    fname: this.fname,
                    lname: this.lname
                }
                await this.$api.auth.register(payload)
                this.success = true
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
.register {
    &__inner {
        width: 50%;
        margin: 100px auto;
        border: 1px solid #eee;
        border-radius: 5px;
        padding: 30px 40px;

        &__item {
            margin: 15px 0;
        }
    }

    .success {
        color: rgba(30, 158, 30, 0.877);
        font-size: 15px;
    }
}
</style>
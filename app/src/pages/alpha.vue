<template>
    <div>
        <v-header></v-header>
        <div>
            <progress-bar type="circle" ref="line" color="#296690"
                          strokeWidth="0.2" duration="2000"
            >
            </progress-bar>
            <div class="logo-block blue" id="blue">
                <div class="container">
                </div>
            </div>
            <form @submit.prevent="submitForm">
                <input v-model="email" v-validate="'required|email'" type="text" name="email"
                       placeholder="example@google.com">
                <input v-model="name" placeholder="Adriano" type="text" name="name" v-validate="'required|alpha'">
                <button type="submit">Send request</button>
            </form>

        </div>
    </div>
</template>

<script>
    import header from '../components/header.vue';
    import VueResource from 'vue-resource';
    import VeeValidate from 'vee-validate';


    export default {
        name: 'alpha',
        components: {
            'v-header': header
        },
        data: function () {
            return {}
        },
        mounted: function () {
            this.$http.get('/alpha/left').then(response => {
                this.$refs.line.animate(response.body.left / response.body.total);
            }, response => {
                //TODO: Remove
                console.log(2);
            });
        },
        methods: {
            submitForm() {
                this.$validator.validateAll().then(res => {
                    if (res) {
                        this.$http.post('/alpha/apply', {'email': this.email, 'name': this.name}).then(response => {
                            console.log('success');
                        }, response => {
                            console.log('posos');
                        });
                        return;
                    }
                    console.log('There are some errors');
                })
            }
        }
    }
</script>
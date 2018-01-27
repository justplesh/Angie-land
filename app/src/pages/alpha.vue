<template>
    <div class="wrapper" v-on:click="resetTooltips">
        <v-header active="alpha"></v-header>
        <div class="logo-block white" id="blue">
            <div class="container">
                <div class="side-bar">
                    <div class="progress-bar">
                        <progress-bar type="circle" ref="line" color="#000000" strokeWidth="2.0" duration="2000">
                        </progress-bar>
                        <p class="score">{{booked}}/{{total}}</p>
                    </div>
                </div>
                <div class="side-text-bar">
                    <h1>Alpha test</h1>
                    <p class="reg-description">
                        Ofc, our messenger is only for very privileged people, that's why there is only {{ total
                        }} tickets for access to alpha testing, hurry up!</p>
                    <a class="btn-register" href="#" v-scroll-to="'#register'">Go to register</a>
                </div>
            </div>
        </div>
        <div class="logo-block login black" id="register">
            <div id="login">
                <form @submit.prevent="submitForm">
                    <fieldset class="clearfix">
                        <p><span class="fontawesome-envelope"></span><input v-model="email"
                                                                            v-validate="'required|email'"
                                                                            type="text"
                                                                            name="email"
                                                                            placeholder="example@google.com"
                                                                            v-tooltip.right="{ show: !this.isEmailValid, trigger: 'manual', content: 'Please enter a valid email' }">
                        </p>
                        <p><span class="fontawesome-user"></span><input v-model="name"
                                                                        v-validate="'required|alpha'"
                                                                        type="text"
                                                                        name="name"
                                                                        placeholder="Adriano"
                                                                        v-tooltip.right="{ show: !this.isNameValid, trigger: 'manual', content: 'Please enter your name' }">
                        </p>
                        <p><input type="submit" value="Send request"></p>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    import header from '../components/header.vue';
    import VueResource from 'vue-resource';
    import VeeValidate from 'vee-validate';
    import VTooltip from 'v-tooltip';


    export default {
        name: 'alpha',
        components: {
            'v-header': header
        },
        data() {
            return {
                isEmailValid: true,
                isNameValid: true,
                booked: 0,
                total: 0
            }
        },
        mounted() {
            this.$http.get('/alpha/booked').then(response => {
                this.booked = response.body.booked;
                this.total = response.body.total;
                this.$refs.line.animate(response.body.booked / response.body.total);
            }, response => {
            });
        },
        methods: {
            submitForm() {
                this.$validator.validateAll().then(res => {
                    if (res) {
                        this.$http.post('/alpha/apply', {'email': this.email, 'name': this.name}).then(response => {
                        }, response => {
                        });
                        return;
                    }
                    if (this.errors.has('email')) {
                        this.isEmailValid = false;
                    }
                    if (this.errors.has('name')) {
                        this.isNameValid = false;
                    }
                })
            },
            resetTooltips() {
                this.isEmailValid = true;
                this.isNameValid = true;
            }
        }
    }
</script>
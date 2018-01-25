<template>
    <div class="wrapper">
        <v-header></v-header>
        <div class="logo-block blue" id="blue">
            <div class="container">
                <div class="side-bar">
                    <div class="progress-bar">
                        <progress-bar type="circle" ref="line" color="#296690" strokeWidth="2.0" duration="2000">
                        </progress-bar>
                        <p class="score">14/88</p>
                    </div>
                </div>
                <div class="side-text-bar">
                    <h1>Lorem Ipsum</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
        <div class="logo-block login">
            <div id="login">
                <form @submit.prevent="submitForm">
                    <fieldset class="clearfix">
                        <p><span class="fontawesome-envelope"></span><input v-model="email"
                                                                            v-validate="'required|email'" type="text"
                                                                            name="email"
                                                                            placeholder="example@google.com"
                                                                            v-tooltip.right="{ show: true, trigger: 'manual', content: 'hello' }">
                        </p>
                        <p><span class="fontawesome-user"></span><input v-model="name" placeholder="Adriano" type="text"
                                                                        name="name" v-validate="'required|alpha'"></p>
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
        data: function () {
            return {
                isEmailValid: true,
                isNameValid: true
            }
        },
        mounted: function () {
            this.$http.get('/alpha/booked').then(response => {
                this.booked = response.body.booked;
                this.total = response.body.total;
                this.$refs.line.animate(response.body.booked / response.body.total);
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
                            //this.$refs.line.animate(this.booked + 1 / this.total);
                        }, response => {
                            if (errors.has('email')) {
                                this.isEmailValid = false;
                            }
                            if (errors.has('name')) {
                                this.isNameValid = false;
                            }
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
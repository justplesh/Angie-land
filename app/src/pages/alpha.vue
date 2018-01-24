<template>
    <div class="wrapper">
        <v-header></v-header>
        <div class="logo-block blue" id="blue">
            <div class="container">
                <div class="side-bar">
                    <div class="progress-bar">
                        <progress-bar type="circle" ref="line" color="#296690" strokeWidth="0.2" duration="2000">
                        </progress-bar>
                        <p class="score">14/88</p>
                    </div>
                </div>
                <div class="side-text-bar">
                    <h1>Lorem Ipsum</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import header from '../components/header.vue';
    import VueResource from 'vue-resource';


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
        }
    }
</script>
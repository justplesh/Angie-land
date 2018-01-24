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
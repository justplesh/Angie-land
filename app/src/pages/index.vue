<template>
    <div class="wrapper">
        <v-header></v-header>
        <div class="logo-block red">
            <img src="../static/img/bottle_PNG2944.png" class="img-block"/>
        </div>
        <div class="logo-block blue" id="blue">
            <div class="container">
                <h1>Lorem Ipsum</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
        <a href="#blue" class="btn-scroll" v-on:click="hideBtn()" v-bind:style="{ display: this.dsp }"></a>
    </div>
</template>

<script>
    import header from '../components/header.vue'

    export default {
        components: {
            'v-header': header
        },
        data() {
            return {
                dsp: "block"
            }
        },
        methods: {
            hideBtn() {
                this.dsp = "none";
            }
        }
    }
</script>
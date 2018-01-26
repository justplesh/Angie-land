<template>
    <div id="main">
        <div class="wrapper">
            <v-header></v-header>
            <div class="logo-block red">
                <img src="../static/img/bottle_PNG2944.png" class="img-block"/>
            </div>
            <div class="logo-block blue" id="blue">
                <div class="container">
                    <div class="side-img">
                        <img src="../static/img/bottle_PNG2944.png" />
                    </div>
                    <div class="side-text">
                        <h1>Lorem Ipsum</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
            <div class="logo-block text red" id="red">
                <div class="container single">
                    <h1>Lorem Ipsum</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <a class="btn-scroll" href="#" v-on:click="changeBtn" v-bind:style="{ backgroundImage: 'url(' + this.directionImg + ')' }" v-scroll-to="this.ref"></a>
        </div>
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
                dsp: "block",
                ref: "#blue",
                directionImg: "./src/static/img/down.png",
            }
        },
        methods: {
            changeBtn() {
                switch (this.ref) {
                    case "#red":
                        this.directionImg = "./src/static/img/up.png";
                        this.ref = "#main";
                        break;
                    case "#main":
                        this.directionImg = "./src/static/img/down.png";
                        this.ref = "#blue";
                        break;
                    case "#blue":
                        this.ref = "#red";
                        break;
                }
            }
        }
    }
</script>
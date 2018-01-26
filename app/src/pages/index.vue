<template>
    <div id="main">
        <div class="wrapper">
            <v-header></v-header>
            <div class="logo-block red">
                <img src="../static/img/logo.png" class="img-block"/>
            </div>
            <div class="logo-block blue" id="blue">
                <div class="container">
                    <div class="side-img">
                        <img src="../static/img/hustler.jpg"/>
                    </div>
                    <div class="side-text">
                        <h1>Guli-Guli</h1>
                        <p>
                            Not another casual messenger, but real application for life. It is necessary as your Iphone X or Tesla. Feel free to text whatever you want, no one will ever see it, only you and your interlocutor. It's absolutely safe and anonymously.
                        </p>
                    </div>
                </div>
            </div>
            <div class="logo-block text red" id="red">
                <div class="container single">
                    <h1>Why it is so safe?</h1>
                    <p>
                    </p>
                    <p>
                        Guli-Guli uses partly decentralized network. All information will be passed through our server encoded. It will be encrypted so hard, that neither of KGB, Kommunists or Zloy Russkiy Nikolay could make a sense.
                    </p>
                </div>
            </div>
            <a class="btn-scroll" href="#" v-on:click="changeBtn"
               v-bind:style="{ backgroundImage: 'url(' + this.directionImg + ')' }" v-scroll-to="this.ref"></a>
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
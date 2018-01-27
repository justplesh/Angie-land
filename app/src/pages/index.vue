<template>
    <div id="main">
        <div class="wrapper">
            <v-header v-bind:style="{ display: this.dsp }"></v-header>
            <div class="logo-block black">
                <img src="../static/img/logo.png" class="img-block"/>
            </div>
            <div class="logo-block white" id="second">
                <div class="container">
                    <div class="side-img-left">
                        <img src="../static/img/businessman.jpg"/>
                    </div>
                    <div class="side-text-right">
                        <h1>Guli-Guli</h1>
                        <p>
                            Not another casual messenger, but real application for life. It is necessary as your Iphone X or Tesla. Beautiful life, for beautiful people, with beautiful messenger. Feel free to text whatever you want, no one will ever see it, only you and your interlocutor. It's absolutely safe and anonymously
                        </p>
                    </div>
                </div>
            </div>

            <div class="logo-block white" id="third">
                <div class="container">
                    <div class="side-text-left">
                        <h1>Why it is so safe?</h1>
                        <p>
                            Guli-Guli uses partly decentralized network. All information will be passed through our server encoded. It will be encrypted so hard, that neither of KGB, Kommunists or Zloy Russkiy Nikolay could make a sense.
                        </p>
                    </div>
                    <div class="side-img-right">
                        <img src="../static/img/hustler.jpg"/>
                    </div>
                </div>
            </div>

            <div class="logo-block white" id="fourth">
                <div class="container">
                    <div class="side-img-left">
                        <img src="../static/img/angry.jpg"/>
                    </div>
                    <div class="side-text-right">
                        <h1>What can i do with your stuff?</h1>
                        <p>
                            You will be able to text, make audio and video calls, send media files and flex however you want. With our messenger you will start new era of communication. Place your bet on us!
                        </p>
                    </div>
                </div>
            </div>

            <div class="logo-block text black" id="fifth">
                <div class="container single">
                    <h1></h1>
                    <p>
                    </p>
                    <p>

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
                dsp: "none",
                ref: "#second",
                directionImg: "./src/static/img/down.png",
            }
        },
        methods: {
            changeBtn() {
                switch (this.ref) {
                    case "#second":
                        this.ref = "#third";
                        break;
                    case "#third":
                        this.ref = "#fourth";
                        break;
                    case "#fourth":
                        this.ref = "#fifth";
                        break;
                    case "#fifth":
                        this.directionImg = "./src/static/img/up.png";
                        this.ref = "#main";
                        break;
                    case "#main":
                        this.directionImg = "./src/static/img/down.png";
                        this.ref = "#second";
                        break;
                }
            },
            headerDisplay() {
                if (window.pageYOffset) {
                    this.dsp = "block";
                } else {
                    this.dsp = "none";
                }
            }
        },
        mounted () {
            window.addEventListener('scroll', this.headerDisplay)
        },
    }
</script>
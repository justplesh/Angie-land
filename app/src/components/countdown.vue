<template>
    <div>
        <p>{{ days || twoNumb }}</p>
        <p>Days</p>
    </div>
    <div>
        <p>{{ hours || twoNumb}}</p>
        <p>Hours</p>
    </div>
    <div>
        <p>{{ minutes || twoNumb}}</p>
        <p>Minutes</p>
    </div>
    <div>
        <p>{{ seconds || twoNumb}}</p>
        <p>Seconds</p>
    </div>
</template>

<script>

    import Vue from 'vue'

    Vue.filter('twoNumb', function (value) {
        if (value.toString().length <= 1) {
            return "0" + value.toString();
        }
        return value.toString();
    });

    export default {
        props: {
            date: {
                type: Number,
                coerce: str => Math.trunc(Date.parse(str) / 1000)
            }
        },
        data() {
            return {
                now: Math.trunc((new Date()).getTime() / 1000)
            }
        },
        ready() {
            window.setInterval(() => {
                this.now = Math.trunc((new Date()).getTime() / 1000);
            }, 1000);
        },
        computed: {
            seconds() {
                return (this.date - this.now) % 60;
            },
            minutes() {
                return Math.trunc((this.date - this.now) / 60) % 60;
            },
            hours() {
                return Math.trunc((this.date - this.now) / 60 / 60) % 24;
            },
            days() {
                return Math.trunc((this.date - this.now) / 60 / 60 / 24);
            }
        }
    }
</script>
<template>
    <div class="wrapper">
        <v-header active="progress"></v-header>
        <div>
            <div class="time-parent">
                <div class="time">
                    <countdown date="01 Jun 2018 00:00:00 GMT"></countdown>
                    <ring-loader size="120px" v-bind:loading=this.loading></ring-loader>
                    <div class="commits"><span>Currently it was made {{ totalCommits }} commits</span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import header from '../components/header.vue'
    import countdown from '../components/countdown.vue'
    import RingLoader from 'vue-spinner/src/RingLoader.vue'

    const url = 'https://api.github.com/repos/justplesh/Guli-Guli-land/stats/contributors';

    export default {
        name: 'progresses',
        components: {
            'v-header': header,
            'countdown': countdown,
            'ring-loader': RingLoader
        },
        data: function () {
            return {
                totalCommits: 0,
                loading: true
            }
        },
        mounted: function () {
            this.$http.get(url).then(res => {
                this.loading = false;
                if (res) {
                    let totalCommits = 0;
                    res.body.forEach(function (e) {
                        totalCommits += e.total;
                    });
                    this.totalCommits = totalCommits;
                    return;
                }
            })
        }
    }
</script>
<template>
    <div>
        <span>Currently there is {{ alphaReqNumb }} alpha requests</span>
    </div>
</template>

<script>
    import VueResource from 'vue-resource';


    export default {
        name: 'alpha',
        data: function () {
            return {
                alphaReqNumb: this.alphaReqNumb
            }
        },
        created: function () {
            this.$http.get('/alpha/left').then(response => {
                this.alphaReqNumb = response.body.places;
            }, response => {
                //TODO: Remove
                console.log(2);
            });
        }
    }
</script>
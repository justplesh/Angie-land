<template>
    <div>
        <span>Currently there is {{ alphaReqNumb }} alpha requests</span>
    </div>
</template>

<script>
    export default {
        name: 'alpha',
        data: function () {
            return {
                alphaReqNumb: 10
            }
        }
    }
</script>
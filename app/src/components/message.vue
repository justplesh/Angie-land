<template>
    <div class="message">
        <span>{{ message }}</span>
    </div>
</template>

<script>
    export default {
        props: {
            status: Boolean,
        },
        data() {
            return {
                message: this.status ? "Sent successfully" : "Request failed",
            }
        }
    }
</script>
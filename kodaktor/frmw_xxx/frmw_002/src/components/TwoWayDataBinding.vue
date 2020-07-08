<template>
    <div>
        <input v-model="message" placeholder="Мы связаны!" class="button fit small" />
        <hr>
        <input v-model="message" placeholder="Мы связаны!" class="button fit small" />
    </div>
</template>

<script>
    export default {
        props: {
            message: String
        }
    }
</script>

<style>
    input {
        width: 310px;
        padding: 0.5em;
        margin: 0.5em;
        color: palevioletred;
        background: papayawhip;
        border: none;
        border-radius: 3px;
    }

    input:focus {
        border: 1px solid black;
    }
</style>
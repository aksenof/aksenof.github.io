<template>
    <main id="app">
        <h3>Добавление степеней на Vue</h3>
        <Powers/>
    </main>
</template>

<script>
    import Powers from './components/Powers.vue'

    export default {
        name: 'app',
        components: {
            Powers
        }
    }
</script>

<style>
    main {
        width: 600px;
        margin: auto;
    }
</style>
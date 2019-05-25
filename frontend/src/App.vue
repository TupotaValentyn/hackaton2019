<template>
    <div id="app">
        <Header/>
    </div>
</template>

<script>
    import Header from './components/header.vue'

    export default {
        name: 'app',
        components: {
            Header
        }
    }
</script>

<style>

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100vh;
        width: 100vw;
    }

    * {
        margin: 0;
        padding: 0;
    }
</style>

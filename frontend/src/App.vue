<template>
    <div id="app">
        <Header/>
        <Map />
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    import Map from './components/Map'

    export default {
        name: 'app',
        data: function () {
            return {
                name: 'map',
            }
        },
        components: {
            Header,
            Map
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
        height: 200vh;
        width: 100vw;
    }

    * {
        margin: 0;
        padding: 0;
    }
</style>

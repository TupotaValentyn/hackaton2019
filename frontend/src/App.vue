<template>
    <div id="app">
        <Header/>
        <Map />
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    import Map from './components/Map.vue'
    import myForm from './components/myForm'

    export default {
        name: 'app',
        data () {
            return {

            }
        },
        components: {
            myForm,
            Header,
            Map
        },

    }
</script>

<style>
    @import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons");
    body {
        overflow-x: hidden;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 200vh;
        width: 100vw;
    }
<<<<<<< HEAD
    .form {
        width: 500px;
    }

=======
    .marker {
        width: 16px !important;
        height: 16px !important;
    }
>>>>>>> add marker
    * {
        margin: 0;
        padding: 0;
    }
</style>

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
        }
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
        height: 250vh;
        width: 100vw;
        background: white;
    }

    * {
        margin: 0;
        padding: 0;
    }
    
    /*.md-dialog .md-dialog-fullscreen .md-theme-default {*/
        /*position: relative;*/
    /*}*/

    /*.md-dialog.md-dialog-fullscreen.md-theme-default::after {*/
        /*content: '';*/
        /*position: absolute;*/
        /*top: 0;*/
        /*width: 500px;*/
        /*height: 500px;*/
        /*background: url("./assets/13-01-01.png");*/
    /*}*/


    .md-button.md-tab-nav-button.md-theme-default.md-active {
        display: none;
    }
</style>

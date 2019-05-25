<template>
    <!--<div class="container">-->
        <!--<GmapMap-->
                <!--class="map"-->
                <!--:center="{lat: 49.43777386178491, lng: 32.06162042036193}"-->
                <!--:zoom="12"-->
                <!--map-type-id="terrain"-->
        <!--&gt;-->
        <!--</GmapMap>-->

        <!--<ul class="list">-->
            <!--<li class="list-item" v-for="item in array" :key="item.id">-->
                <!--<md-checkbox  v-model="item.value">Array</md-checkbox>-->
            <!--</li>-->

        <!--</ul>-->
        <!--<button v-on:click="log">-->
            <!--Status-->
        <!--</button>-->
    <!--</div>-->


    <my-form></my-form>

    <!--<div>-->

        <!--<md-dialog-alert-->
                <!--:md-active.sync="first"-->
                <!--md-content=""-->
                <!--md-confirm-text="Cool!" />-->

        <!--<md-dialog-alert-->
                <!--:md-active.sync="second"-->
                <!--md-title="Post created!"-->
                <!--md-content="Your post <strong>Material Design is awesome</strong> has been created." />-->

        <!--<md-button class="md-accent md-raised" @click="first = true">Alert</md-button>-->
        <!--<md-button class="md-primary md-raised" @click="second = true">Alert</md-button>-->
    <!--</div>-->
</template>

<script>

    import myForm from './myForm'

    export default {
        name: 'map',
        props: [],
        components: {
            myForm
        },
        data() {
            return {
                first: false,
                second: false,

                array: [{
                    id: 0,
                    value: false,
                }, {
                    id: 1,
                    value: false,
                }, {
                    id: 2,
                    value: false,
                },
                {
                    id: 3,
                    value: false,
                }, {
                    id: 4,
                    value: false,
                }, {
                    id: 5,
                    value: false,
                },
                {
                    id: 6,
                    value: false,
                }, {
                    id: 7,
                    value: false,
                }, {
                    id: 9,
                    value: false,
                }]
            }
        },
        methods: {
            log() {
                console.log(this.array)
            }
        },

    }
</script>

<style scoped>
    .map {
        width: 60vw;
        height: 50vh;
    }

    .container {
        display: grid;
        place-content: start center;
        padding: 150px 0 0 0;
        width: 100vw;
        height: 100vh;
        background: white !important;
        margin: 0 auto;
        background: gray;
    }

    .list {
        list-style: none;
        display: grid;
        grid: repeat(3, 1fr) / repeat(3, 1fr);
    }

</style>

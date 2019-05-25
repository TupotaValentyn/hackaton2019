<template>
    <div class="container">
        <span v-if="isAdd">Select location, by click on the map</span>
        <GmapMap
                class="map"
                :center="center"
                :zoom="12"
                map-type-id="terrain"
                @click="click"
        >
            <GmapMarker v-for="mark in marks" :position="mark.locale" :title="'Lex'" @click="markClick(mark.id)"
                        :key="mark.id"
            >
                <gmap-info-window :opened="mark.isOpen" @closeclick="closeInfoWindow(mark.id)">
                    I can use <b>HTML</b> here and expressions too !<br>
                    I am not bound to any markers. I'm freeee.
                    <img :src="mark.image" alt="Something wrong">
                </gmap-info-window>
            </GmapMarker>
        </GmapMap>

        <ul class="list">
            <li class="list-item" v-for="item in array" :key="item.id">
                <md-checkbox v-model="item.value" class="md-primary">Array</md-checkbox>
            </li>

        </ul>

        <md-dialog :md-active.sync="showDialog">
            <md-dialog-title>Preferences</md-dialog-title>

            <md-tabs md-dynamic-height>
                <md-tab md-label="General">
                    <my-form @exit="showDialog=false" @add="saveEvent"></my-form>
                </md-tab>

            </md-tabs>

        </md-dialog>

        <md-button class="md-primary md-raised" @click="addEvent">Add event</md-button>
    </div>
</template>

<script>
    import axios from 'axios';

    import myForm from './myForm'

    export default {
        name: 'map',
        props: [],
        components: {
            myForm
        },
        data() {
            return {
                showDialog: false,
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
                    }],
                center: {lat: 0, lng: 0},
                formsCoordinate: {lat: 0, lng: 0},
                isAdd: false,
                marks: [{}]
            }
        },
        computed: {},
        beforeCreate() {
            navigator.geolocation.getCurrentPosition((data) => {
                this.center = {lat: data.coords.latitude, lng: data.coords.longitude};
            });
            axios.get('http://localhost:3000/api/event')
                .then((data) => {
                    this.marks = data.data.map(e => {
                        e.isOpen = false;
                        return e;
                    });
                })
        },
        methods: {
            click(event) {
                if (this.isAdd) {
                    let coordinate = {lat: event.latLng.lat(), lng: event.latLng.lng()};
                    if (coordinate) {
                        this.formsCoordinate = coordinate;
                        this.showDialog = true;
                    }
                }
            },

            markClick(id) {
                this.marks = this.marks.map(mark => {
                    if (mark.id === id) {
                        mark.isOpen = true;
                    }
                    return mark;
                })
            },
            closeInfoWindow(id) {
                this.marks = this.marks.map(mark => {
                    if (mark.id === id) {
                        mark.isOpen = false;
                    }
                    return mark;
                })
            },

            addEvent() {
                this.isAdd = true;
            },

            saveEvent($event) {
                this.showDialog = false;
                this.isAdd = false;
                console.log($event);
                const {description, name, movie, selectedMovies, image} = $event;
                let event = {
                    description,
                    name,
                    image,
                    type: movie,
                    hashtags: selectedMovies,
                    locale: this.formsCoordinate,
                    creatorId: 1,
                };
                axios.post('http://localhost:3000/api/event/', event)
                    .then((data) => this.marks.push(data.data));
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

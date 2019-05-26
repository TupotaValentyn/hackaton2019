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
                    <div class="notification">
                        I can use <b>HTML</b> here and expressions too !<br>
                        I am not bound to any markers. I'm freeee.
                    </div>
                    <img :src="mark.image" alt="Something wrong">
                </gmap-info-window>
            </GmapMarker>
        </GmapMap>

        <ul class="list">
            <li class="list-item" v-for="item in array" :key="item.id">
                <img class="categories" :src="'/img/' + item.content + '.png'" alt="pic">
                <p class="content">{{item.content}}</p>
                <md-checkbox v-model="item.value" class="md-primary"></md-checkbox>
            </li>

        </ul>

        <md-dialog :md-active.sync="showDialog">

            <md-tabs md-dynamic-height>
                <md-tab md-label="">
                    <my-form @exit="showDialog=false" @add="saveEvent"></my-form>
                </md-tab>

            </md-tabs>

        </md-dialog>

        <md-button class="md-primary md-raised add" @click="addEvent">Add event</md-button>
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
                    content: 'meeting'
                }, {
                    id: 1,
                    value: false,
                    content: 'food'
                }, {
                    id: 2,
                    value: false,
                    content: 'shop'
                },
                    {
                        id: 3,
                        value: false,
                        content: 'travel'
                    }, {
                        id: 4,
                        value: false,
                        content: 'car'
                    }, {
                        id: 5,
                        value: false,
                        content: 'alcohol'
                    },
                    {
                        id: 6,
                        value: false,
                        content: 'sport'
                    }, {
                        id: 7,
                        value: false,
                        content: 'dviЖ'
                    }, {
                        id: 9,
                        value: false,
                        content: 'other'
                    }

                ],
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

    * {
        font-family: 'Maven Pro', sans-serif;
    }

    .map {
        width: 60vw;
        height: 70vh;
        border: 15px solid #2d2e83;
        border-radius: 20px;
    }

    .content {
        margin: 0 10px;
        height: 50px;
        line-height: 50px;
        width: 100px;

    }

    .container {
        display: grid;
        place-content: start center;
        padding: 250px 0 0 0;
        width: 100vw;
        height: 100vh;
        background: white !important;
        margin: 0 auto;
        background: gray;
    }

    .list {
        margin: 60px 0;
        list-style: none;
        display: grid;
        grid: repeat(3, 1fr) / repeat(3, 1fr);
    }

    .list-item {
        display: flex;
        place-content: center;
    }

    .categories {
        width: 40px;
        height: 40px;
        object-fit: cover;
    }

    .add {
        display: grid;
        width: 40%;
        place-self: center;
        font-size: 1.2rem;
        font-weight: bold;
    }

    .md-button.md-tab-nav-button.md-theme-default.md-active {
        display: none !important;
    }

    .notification {
        background: #000;
    }



</style>

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
                        :icon="'/img/' + mark.type.toLowerCase() + '.png'"
                        :key="mark.id"
            >
                <gmap-info-window :opened="mark.isOpen" @closeclick="closeInfoWindow(mark.id)">
                    <div class="notification">
                        <ul>
                            <li>
                                <span class="name">
                                    Event name:
                                </span>
                                <span class="data">
                                    {{mark.name}}
                                </span>
                            </li>
                            <li>
                                <span class="name">
                                    description:
                                </span>
                                <span class="data">
                                    {{mark.description}}
                                </span>
                            </li>
                            <li>
                                <span class="name">
                                    Name of creator:
                                </span>
                                <span class="data">
                                    {{mark.creator[0].name}}
                                </span>
                            </li>
                            <li>
                                <span class="name">
                                    Contacts data:
                                </span>
                                <span class="data">
                                    0987654321
                                </span>
                            </li>
                            <li>
                                <span class="name">
                                    Date:
                                </span>
                                <span class="data">
                                    23.05.2019
                                </span>
                            </li>
                            <li class="last">
                                <img :src="mark.image" alt="Something wrong">

                            </li>
                        </ul>
                    </div>
                </gmap-info-window>
            </GmapMarker>
        </GmapMap>

        <ul class="list">
            <li class="list-item" v-for="item in array" :key="item.id">
                <img class="categories" :src="'/img/' + item.content + '.png'" alt="pic">
                <p class="content">{{item.content}}</p>
                <md-checkbox v-model="item.value" class="md-primary"
                             @change="changeChexbox"></md-checkbox>
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
                marks: [{}],
                fullMarks: [{}]
            }
        },
        computed: {},
        beforeCreate() {
            navigator.geolocation.getCurrentPosition((data) => {
                this.center = {lat: data.coords.latitude, lng: data.coords.longitude};
            });
            axios.get('http://localhost:3000/api/event')
                .then((data) => {
                    this.fullMarks = this.marks = data.data.map(e => {
                        e.isOpen = false;
                        return e;
                    });
                    console.log(this.marks)
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
                    .then((data) => {
                        this.marks.push(data.data)
                    });
            },
            changeChexbox($event) {
                const filters = this.array.filter(e => e.value).map((e) => e.content);
                if (filters.length != 0) {
                    this.marks = this.fullMarks.filter((el) => {
                        return filters.includes(el.type.toLowerCase());
                    })
                } else {
                    this.marks = this.fullMarks.map(e => e);
                }
            },
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
        /*background: red;*/
        height: 300px;
        width: 300px;

    }

    .notification ul {
        display: grid;
        grid: repeat(5, auto)/ 1fr;
    }

    .notification ul li {
        display: grid;
        justify-content: space-between;
        grid: 1fr/ 1fr 1fr;
    }

    .notification ul li.last {
        grid: 1fr/ 1fr;
        place-items: center;
    }

    .name {
        text-align: left;
        font-weight: bold;
    }

    .data {
        text-align: left;
        text-transform: uppercase;

    }

</style>

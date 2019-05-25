<template>
    <div class="container">
        <GmapMap
                class="map"
                :center="{lat: 49.43777386178491, lng: 32.06162042036193}"
                :zoom="12"
                map-type-id="terrain"
        >
        </GmapMap>

        <div class="list">
            <md-checkbox v-model="array" value="1">Array</md-checkbox>
            <md-checkbox v-model="array" value="2">Array</md-checkbox>
            <md-checkbox v-model="array">Boolean</md-checkbox>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'map',
        props: [],
        data: () => ({
            array: [],
            boolean: false,
        })
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
</style>

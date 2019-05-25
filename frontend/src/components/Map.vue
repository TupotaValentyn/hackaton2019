<template>
    <div class="container">
        <GmapMap
                :center="{lat: 49.43777386178491, lng: 32.06162042036193}"
                :zoom="12"
                map-type-id="terrain"
                style="width: 1023px; height: 516px"
        >

        </GmapMap>
    </div>
</template>

<script>

    export default {
        name: 'map',
        props: [],

    }
</script>

<style scoped>
    .container {
        display: grid;
        place-content: center;
        /*width: 640px;*/
        /*height: 480px;*/
        margin: 0 auto;
        background: gray;
    }
</style>

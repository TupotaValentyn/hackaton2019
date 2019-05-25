<template>
    <header class="header">
        <h2 class="info">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam cum harum officiis possimus quas
            quasi, quibusdam similique! Rerum, voluptate.
        </h2>
    </header>
</template>

<script>
    export default {
        name: 'Header',
    }
</script>

<style>

    * {
        font-family: 'Maven Pro', sans-serif;
        box-sizing: border-box;
    }

    .header {
        width: 100vw;
        height: 100vh;
        display: grid;
        place-content: center end;
        background-image: url('../assets/header2-01.png');
        /*background-color: #FA7268;*/
        background-size: cover;
        padding: 0 300px 0 0;
        /*TODO: 'need select translate for text'*/
    }

    .info {
        width: 500px;
        text-align: right;
        line-height: 1.7;
        letter-spacing: 6px;
        text-transform: uppercase;
    }

</style>

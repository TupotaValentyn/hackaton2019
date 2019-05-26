<template>
    <header class="header">
        <img class="girl" src="../assets/header.png" alt="">
        <h2 class="info">
            <div class="wrap-text">
                То є - щастя, то є ваша страсть і ваша істінна любовь.
            </div>
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

    .girl {
        background-color: white;
    }

    h2 {
        display: grid;
        place-content: center;
    }

    .wrap-text {
        position: relative;
        
    }

    .wrap-text::after {
        content: '';
        position: absolute;
        width: 100px;
        height: 100px;
        top: -95px;
        right: 5px;
        background: url("../assets/kisspng_emojipedia_unicorn_sticker.png");
        background-size: cover;
    }

    .header {
        width: 100vw;
        height: 100vh;
        display: grid;
        grid: 1fr/ 1200px 1fr;
        background: white;
        /*place-content: center end;*/
        justify-content: space-between;
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

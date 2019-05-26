<template>
    <div class="form" style="min-height: 780px">
        <md-field>
            <label>Name</label>
            <md-input v-model="name"></md-input>
        </md-field>

        <md-field class="description">
            <label>Description</label>
            <md-textarea v-model="description"></md-textarea>
            <span class="md-helper-text">write short description about event</span>
        </md-field>

        <md-field>
            <label for="movies">Movies</label>
            <md-select v-model="selectedMovies" name="movies" id="movies" multiple>
                <md-option value="fight-club">Flex dancing</md-option>
                <md-option value="godfather">Have a rest - gora</md-option>
                <md-option value="godfather-ii">BezuderЖnoe viselьye</md-option>
                <md-option value="godfather-iii">Godfather III</md-option>
                <md-option value="godfellas">Godfellas</md-option>
                <md-option value="pulp-fiction">Pulp Fiction</md-option>
                <md-option value="scarface">Scarface</md-option>
            </md-select>
        </md-field>

        <md-field>
            <label for="movie1">Movie</label>
            <md-select v-model="movie" name="movie" id="movie1">
                <md-option value="Meeting">Meeting</md-option>
                <md-option value="Travel">Travel</md-option>
                <md-option value="Sport">Sport</md-option>
                <md-option value="Food">Food</md-option>
                <md-option value="Car">Car</md-option>
                <md-option value="DviЖ">DviЖ</md-option>
                <md-option value="Shop">Shop</md-option>
                <md-option value="Alcohol">Alcohol</md-option>
                <md-option value="Other">Other</md-option>
            </md-select>
        </md-field>
        <div style="height: 200px; width: 200px">
            <img :src="imageSrc" alt="" style="height: 200px; width: 200px">
        </div>
        <label :for="'i228'">Upload image</label>
        <input type="file" @change="change" :id="'i228'" style="display: none">
        <md-dialog-actions>
            <md-button class="md-primary" @click="$emit('exit')">Close</md-button>
            <md-button class="md-primary" @click="passData">Save</md-button>
        </md-dialog-actions>
    </div>
</template>

<script>
    export default {
        name: 'my-form',
        data() {
            return {
                name: null,
                description: null,
                selectedMovies: [],
                movie: 'godfather',
                image: null,
                imageSrc: '.',
            }
        }, methods: {
            passData() {
                const fr = new FileReader();
                const image = this.image;
                fr.addEventListener("load", (e) => {
                    this.$emit('add',{
                        name: this.name,
                        description: this.description,
                        selectedMovies: this.selectedMovies,
                        movie: this.movie,
                        image: e.target.result
                    });
                });

                fr.readAsDataURL(image)
            },
            change(e) {
                this.image = e.target.files[0];
                const fr2 = new FileReader();
                const image = this.image;
                fr2.addEventListener("load", (e) => {
                    this.imageSrc = e.target.result;
                });

                fr2.readAsDataURL(image)
            }
        }
    }
</script>

<style scoped>
    .md-field {
        /*max-width: 300px;*/
    }
</style>

<template>
    <div class="form">
        <md-field>
            <label>Name</label>
            <md-input v-model="Name"></md-input>
        </md-field>

        <!--<md-field :class="messageClass">-->
            <!--<label>Required Field</label>-->
            <!--<md-input v-model="required" required></md-input>-->
            <!--<span class="md-error">There is an error</span>-->
        <!--</md-field>-->

        <md-field :class="messageClass">
            <label>Description</label>
            <md-textarea v-model="textarea"></md-textarea>
            <span class="md-helper-text">write short description about event</span>
        </md-field>

        <md-field>
            <label for="movies">Movies</label>
            <md-select v-model="selectedMovies" name="movies" id="movies" multiple>
                <md-option value="fight-club">Fight Club</md-option>
                <md-option value="godfather">Godfather</md-option>
                <md-option value="godfather-ii">Godfather II</md-option>
                <md-option value="godfather-iii">Godfather III</md-option>
                <md-option value="godfellas">Godfellas</md-option>
                <md-option value="pulp-fiction">Pulp Fiction</md-option>
                <md-option value="scarface">Scarface</md-option>
            </md-select>
        </md-field>

        <md-field>
            <label for="movie1">Movie</label>
            <md-select v-model="movie" name="movie" id="movie1">
                <md-option value="fight-club">Fight Club</md-option>
                <md-option value="godfather">Godfather</md-option>
                <md-option value="godfather-ii">Godfather II</md-option>
                <md-option value="godfather-iii">Godfather III</md-option>
                <md-option value="godfellas">Godfellas</md-option>
                <md-option value="pulp-fiction">Pulp Fiction</md-option>
                <md-option value="scarface">Scarface</md-option>
            </md-select>
        </md-field>


    </div>
</template>

<script>
    export default {
        name: 'my-form',
        data () {
            return {
                Name: null,
                required: null,
                textarea: null,
                hasMessages: false,
                selectedMovies: [],
                movie: 'godfather'
            }
        },
        computed: {
            messageClass() {
                return {
                    'md-invalid': this.hasMessages
                }
            }
        }
    }
</script>

<style scoped>
    .md-field {
        max-width: 300px;
    }
</style>

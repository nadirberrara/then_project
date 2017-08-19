<template>
    <section class="hero notification">
        <div>
            <h1>{{msg}}</h1>
            <ul v-for="epic in epics">
                <router-link :to="'/epics/' + epic._id"> {{ epic.title }}</router-link>
            </ul>
        </div>
    </section>
</template>

<script>
import axios from "axios";

export default {
    name: "hello",
    data() {
        return {
            msg: "WELCOME",
            epics: null
        };
    },
    created() {
        const myAPI = axios.create({
            baseURL: "http://localhost:3000/api/"
        });

        function getEpics() {
            return myAPI.get("/epics/").then(response => {
                return response.data;
            })
        }
        getEpics().then(epics => {
            this.epics = epics
        });
    }
};





</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
/* h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
} */
</style>


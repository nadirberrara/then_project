<template>
    <section class="hero">
        <div>
            <h1 class="title white">STORIES :</h1>
            <span v-for="epic in epics">
                <router-link :to="'/epics/' + epic._id">- {{ epic.title }}</router-link>
            </span>
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
.white {
    color: white
}

.hero {
    height: 300px;
    margin: 30px;
}
</style>


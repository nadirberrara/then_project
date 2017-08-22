<template>
    <section class="">

        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                    Then...
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                    <h1>Rules :</h1>

                    <li>Login or Signup</li>
                    <li>Select a Story</li>
                    <li>Read and vote for your favorite propositions</li>
                    <li>Come back at 8am and pm</li>
                    <li>Create your own story and share with your friends</li>

                </div>
            </div>
            <footer class="card-footer">
                <a href="http://localhost:8080/#/signup" class="card-footer-item">Signup</a>
                <a href="" class="card-footer-item">Login</a>
            </footer>
        </div>

        <div class="hero">
            <h1 class="title">
                <span class="fa fa-arrow-down"></span> Participate a Story
                <span class="fa fa-arrow-down"></span>
            </h1>
            <li v-for="epic in epics">
                <router-link :to="'/epics/' + epic._id">{{ epic.title }}</router-link>
            </li>
            <h1 class="title">

                <span class="fa fa-arrow-right"></span>
                <a href="localhost:8080/create">Or Create your Own Story </a>
                <span class="fa fa-arrow-left"></span>
            </h1>

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
            baseUrl: process.env.NODE_ENV === "production" ? '/api' : "http://localhost:3000/api"
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
li {
    color: white;
    font-size: 25px
}

.hero {
    height: 100%;
    margin: 30px;
    padding: 30px;
    border: 1px solid white;
    background-color: #06425C;
}

.title {
    margin: 30px 100px;
    padding: 20px;
    color: white;
    border: 1px solid white;
    background-color: #CDBB79
}

.card {
    margin: 30px;
    background-color: #51A39D;
    color: white;
    border: white 1px solid
}

p.card-header-title {
    color: white
}

h1 {
    color: white
}
</style>


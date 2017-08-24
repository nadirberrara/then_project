<template>
    <section class="">

        <!-- <div class="columns photos">

                            <div class="column">
                                <img src="../assets/photos-retouchees/IH-2.jpg" style="width: 500px">
                            </div>

                            <div class="column">
                                <img src="../assets/photos-retouchees/IH-3.jpg" style="width: 500px">
                            </div>

                            <div class="column">
                                <img src="../assets/photos-retouchees/IH.jpg" style="width: 500px">
                            </div>

                        </div> -->

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
                    <li>Participate a Story : Read & Vote</li>
                    <li>Create your own story</li>
                    <li>Be there at 8 for updates</li>
                    <li>Share with friends</li>

                </div>
            </div>
            <footer class="card-footer">
                <router-link to="/signup" class="card-footer-item ">Signup</router-link>

                <router-link to="/signup" class="card-footer-item ">Login</router-link>
            </footer>
        </div>

        <div class="hero ">
            <h1 class="title ">
                <p>Select a Story</p>
                <span class="fa fa-arrow-down icon is-large"></span>
            </h1>
            <li v-for="epic in epics ">
                <router-link :to=" '/epics/' + epic._id ">{{ epic.title }}</router-link>
            </li>
            <h1 class="title ">
                <span class="fa fa-arrow-down "></span>
                <p>
                    <router-link to="/create">Create your Story
                    </router-link>
                </p>

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
            baseURL: process.env.NODE_ENV === "production" ? '/api' : "http://localhost:3000/api"
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
div.column img {
    border: 1px solid white
}

li {
    color: white;
    font-size: 25px
}

.hero {
    height: 100%;
    margin: 30px;
    padding: 30px;
    border: 3px solid white;
    background-color: rgba(6, 66, 92, 0.9);
    border-radius: 10px
}

.title {
    margin: 30px 100px;
    padding: 20px;
    color: white;
    border: 3px solid white;
    background-color: #CDBB79;
    border-radius: 10px
}

.card {
    margin: 30px;
    background-color: rgba(129, 67, 116, 0.9);
    ;

    color: white;
    border: white 3px solid;
    border-radius: 10px
}

p.card-header-title {
    color: white
}

h1 {
    color: white
}
</style>


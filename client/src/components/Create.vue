<template>
    <div class="container">
        <h1 class="title">
            CREATE YOUR STORY
        </h1>
        <div class="column">
            <img src="../assets/photos-retouchees/IH-5.jpg" style="width: 500px">
        </div>
        <hr>

        <!-- <div v-else="ifLoggedOut"> -->
        <div class="notification is-info">
            You have to be logged In to post a new story
        </div>
        <router-link to="/signup" class="card-footer-item ">
            <button class="button">Login / Signup</button>
        </router-link>
        <!-- </div> -->
        <hr>
        <!-- <div v-if="ifLoggedIn"> -->
        <div v-if="bravo" class="notification is-primary">
            Your story was added successfully
        </div>
        <div v-if="danger" class="notification is-danger">
            Informations missing
        </div>

        <form action="" @submit.prevent="createNewEpic">
            <div>
                <p>Choose a title :</p>
                <input type="text" class="button is-large" v-model="title">
            </div>
            <div class="story">
                <p>Start your story:</p>
                <textarea name="" id="" cols="30" rows="2" class="textarea is-medium" v-model="text"></textarea>
            </div>
            <div>
                <button class="button submit">Submit my story</button>
            </div>
        </form>

        <!-- </div> -->

    </div>
</template>
<script>

import axios from "axios";
const myAPI = axios.create({
    baseURL: process.env.NODE_ENV === "production" ? '/api' : "http://localhost:3000/api"
});


export default {
    props: ["stories", "epicId"],
    data() {
        return {
            title: "",
            text: "",
            epic: "",
            bravo: false,
            danger: false,
            user: ""
        }
    },

    methods: {
        createNewEpic() {

            myAPI.post("epics/", { mainStory: this.text, title: this.title }).then(({ data: epic }) => {
                this.$router.push("/epics/" + epic._id)
            })
        }
    }
}


</script>

<style scoped>
div.notification.is-info {
    margin: 20px 20px
}

div.column img {
    border: 1px solid white
}

h1.title {
    color: #06425c;
    margin: 40px
}

p {
    color: #06425c
}

.container {
    height: auto;
    margin-top: 30px;
    margin-bottom: 150px
}

.story {
    margin: 30px
}

button.button.submit {
    color: #06425c
}












































































/* color blue: #06425c 
color: purple: #814374
color: turquoise #51A39D
color: beige #CDBB79*/
</style>




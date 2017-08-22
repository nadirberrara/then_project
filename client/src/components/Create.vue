<template>
    <div class="container">
        <h1 class="title">
            CREATE YOUR STORY
        </h1>

        <div v-if="bravo" class="notification is-primary">
            Your story was added successfully
        </div>
        <div v-if="danger" class="notification is-danger">
            Informations missing
        </div>
        <div>
            <p>Choose a title :</p>
            <input type="text" class="button is-large" v-model="title">
        </div>
        <div class="story">
            <p>Start your story:</p>
            <textarea name="" id="" cols="30" rows="2" class="textarea is-medium" placeholder="" v-model="text"></textarea>
        </div>
        <div>
            <button class="button submit" v-on:click="createNewEpic()">Submit my story</button>
        </div>
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
            danger: false
        }
    },
    methods: {
        createNewEpic() {

            myAPI.post("epics/", { mainStory: this.text, title: this.title }).then(epic => {
                this.title = "",
                    this.text = ""
                this.bravo = true
                this.newEpic = epic
            })
        }
    }
}


</script>

<style scoped>
h1.title {
    color: #06425c
}

p {
    color: #06425c
}

.container {
    height: auto;
    margin-top: 30px
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




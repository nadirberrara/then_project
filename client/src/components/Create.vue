<template>
    <div>
        <h1 class="title">
            CREATE YOUR
        </h1>

        <div v-if="bravo" class="notification is-primary">
            Your story was added successfully
        </div>
        <div>
            <p>Choose a title :</p>
            <input type="text" class="button is-large" v-model="title">
        </div>
        <div>
            <p>Start your :</p>
            <textarea name="" id="" cols="30" rows="2" class="textarea is-medium" placeholder="" v-model="text"></textarea>
        </div>
        <br>
        <div>
            <button class="button submit" v-on:click="createNewEpic()">Submit my story</button>
        </div>
    </div>
</template>
<script>

import axios from "axios";
const myAPI = axios.create({
    baseURL: "http://localhost:3000/api/"
});


export default {
    props: ["stories", "epicId"],
    data() {
        return {
            title: "",
            text: "",
            epic: "",
            bravo: false
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





// data() {
//     return {
//         text: '',
//         epic: {},
//         allStories: [],

//     };
// },

// submitNew() {
//     this.edit = false
//     myAPI.post("/epics/" + this.epic._id + "/stories", { text: this.text }).then(response => {
//         this.getStories().then(stories => {
//             this.allStories = stories
//         })
//         return response.data;
//     })
//     this.text = ""
// },
//   },

</script>




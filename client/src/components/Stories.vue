<template>
    <div class="">

        <div class="block scroll">
            <table class="table" v-for="story in stories">
                <tbody :style="styles">
                    <tr>
                        <strong></strong>
                        <th>then, {{ story.text }}</th>
                        <th class="is-pulled-right">
                            <button class="button is-right">
                                <span class="fa fa-thumbs-o-up"> 0</span>
                            </button>
                        </th>

                    </tr>
                </tbody>

            </table>
            <button class="button" type="submit" v-on:click="selectRandomStory()"> Select randomly a story </button>

        </div>
    </div>
</template>

<script>
import axios from "axios";
import Stories from "@/components/Stories";

const myAPI = axios.create({
    baseURL: process.env.NODE_ENV === "production" ? '/api' : "http://localhost:3000/api"
});

export default {
    props: ["stories", "epicId"],
    data() {
        return {
            styles: {
                "word-break": "break-word"
            }
        }
    },

    methods: {
        // selectRandomStory() {
        //     myAPI.post("/epics/" + this.epic._id, { text: this.text }).then(response => {
        //         this.
        //     })
        // }
    }

    //         submitNewStory() {
    //       this.edit = false
    //       myAPI.post("/epics/" + this.epic._id + "/stories", { text: this.text }).then(response => {
    //         this.getStories().then(stories => {
    //           this.allStories = stories
    //         })
    //         return response.data;
    //       })
    //       this.text = ""
    //     },
    //   },

};
</script>

<style scoped>
.table {
    background-color: #CDBB79;
    color: white;
    overflow-y: scroll;
    display: block;
    border: 3px white solid;
}

.scroll {
    width: 100%;
    height: 250px;
    overflow-y: scroll;
}

th {
    color: #06425C
}
</style>

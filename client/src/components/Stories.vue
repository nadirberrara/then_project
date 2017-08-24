<template>
    <div>

        <div class="block scroll">
            <table class="table" v-for="story in stories">
                <tbody :style="styles">
                    <tr>
                        <strong></strong>
                        <th>then, {{ story.text }}</th>
                        <th class="is-pulled-right">
                            <button @click="likeStory(story)" class="button is-right">
                                <span class="fa fa-thumbs-o-up"> {{ story.likes.length }}</span>
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
            },
            like: null,
            story: null,
            userId: null
        }
    },


    methods: {
        likeStory(story) {
            myAPI.post('/epics/likes', { storyId: story._id }).then(story => {
            })
        },
        selectRandomStory() {
            myAPI.post("/" + this.epicId + "/add-random-story").then(story => {
            })
        }
    }



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

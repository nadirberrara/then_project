<template>
    <div class="hero">

        <div class="block scroll">
            <table class="table">
                <tbody>
                    <tr v-for="story in stories">
                        <strong></strong>
                        <th>then, {{ story.text }}</th>
                        <th>
                            <button class="button">
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
    baseURL: "http://localhost:3000/api/"
});

export default {
    props: ["stories"],
    data() {
        return {
            //         styles: {
            //             border: "1px solid grey",
            //             padding: "20px"
            //         },
            //         stylesButton: {
            //             padding: "20px",
            //             marginBottom: "30px"
            //   }
        }
    },

    methods: {
        selectRandomStory() {
            var randomStory = this.stories[Math.floor(Math.random() * this.stories.length)]
            this.$emit("nextStory", randomStory.text)

            myAPI.post("/epics/" + epicId, { text: this.randomStory.text }).then(response => {
                return this.randomStory
            })
        }
    }

};
</script>

<style scoped>
.block {}

.table {
    background-color: #CDBB79;
    color: white;
    overflow-y: scroll;
    display: block;
    border: 1px white solid;
}

.scroll {
    width: 100%;
    height: 250px;
    overflow-y: scroll;
}

th {
    color: #06425C
}

h3.title {
    color: #06425C
}
</style>

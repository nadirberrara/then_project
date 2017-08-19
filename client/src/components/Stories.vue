<template>
    <section class="hero">
        <div>
            <div>
                <h1 class="title">STORIES SUGGESTED:</h1>
    
                <div class="block">
                    <table class="table is-striped is-bordered">
                        <tbody>
                            <strong>then,</strong>
    
                            <tr v-for="story in stories">
                                <th>- {{ story.text }}</th>
                                <th>
                                    <button class="button">
                                        <span class="fa fa-thumbs-o-up"> 0</span>
                                    </button>
                                </th>
                            </tr>
                            <strong>then,</strong>
    
                        </tbody>
                    </table>
                </div>
    
                <!-- <div v-for="story in stories">
                                                                                            <p>
                                                                                                <strong>then,</strong>
                                                                                                {{ story.text }}
                                                                                                <strong>then,</strong>
                                                                                            </p>
                                                                                        </div> -->
            </div>
            <!-- <button type="submit" v-on:click="selectRandomStory()"> Select randomly a story </button> -->
        </div>
    </section>
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


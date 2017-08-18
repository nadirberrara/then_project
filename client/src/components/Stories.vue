<template>
    <div>
        <div>
            <h3>STORIES SUGGESTED:</h3>
            <div v-for="story in stories">
                <p :style="styles">
                <strong>then,</strong>
                    {{ story.text }}
                <strong>then,</strong>
                </p>
            </div>
        </div>
            <button type="submit" v-on:click="selectRandomStory()" :style="stylesButton"> Select randomly a story </button>
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
            styles: {
                border: "1px solid grey",
                padding: "20px"
            },
            stylesButton: {
                padding: "20px",
                marginBottom: "30px"
      }
        }
    },
    
    methods: {
        selectRandomStory() {
        var randomStory = this.stories[Math.floor(Math.random() * this.stories.length)]
        this.$emit("nextStory", randomStory.text)

        myAPI.post("/epics/" + epicId, { text: this.randomStory.text}).then(response => {
            return this.randomStory
        })
    }
    }

};
</script>


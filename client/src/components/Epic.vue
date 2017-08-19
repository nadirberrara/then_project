<template>
  <section class="hero">
  
    <div class="epic">
  
      <div v-if="epic && allStories" class="is-two-thirds notification">
        <i>by Nadir </i>
        <h3 class="title"> {{ epic.title }} </h3>
        <div>
          <p>{{epic.mainStory}}</p>
          <strong>then,</strong>
          <div>
            <p v-for="nextStory in epic.nextStories">{{ nextStory }}</p>
          </div>
          </p>
        </div>
      </div>
  
      <div v-if="!edit" class="is-white">
        <button v-on:click="addNewStory()" class="button">and then</button>
      </div>
      <div class="notification">
        <div v-if="!edit">
          <div class="stories " :style="styles">
            <div>
              <tag-stories :stories="allStories" v-on:nextStory="addNext"> </tag-stories>
            </div>
          </div>
        </div>
  
        <div class="addStory" v-else>
          <strong>then,</strong>
          <textarea name="newStory" cols="80" rows="3" v-model="text">
          </textarea>
          <strong>then,</strong>
          <br>
          <button type="submit" v-on:click="submitNewStory()"> submit my story </button>
          <button type="submit" v-on:click="cancelEditing()"> cancel </button>
        </div>
      </div>
  
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
  name: "hello",
  data() {
    return {
      text: '',
      epic: {},
      story: {},
      allStories: [],
      edit: false,
      // styles: {
      //   border: "1px solid grey",
      //   margin: "20px 80px",
      //   padding: "20px"
      // },
      // stylesButton: {
      //   padding: "20px",
      //   marginBottom: "30px"
      // }
    };
  },
  created() {
    this.getEpic(this.$route.params.epicId).then(epic => {
      this.epic = epic
    });

    this.getStories().then(stories => {
      this.allStories = stories
    })

  },
  methods: {

    addNext(story) {
      this.epic.nextStories.push(story)
    },
    getEpic(epicId) {
      return myAPI.get('/epics/' + epicId).then(response => {
        return response.data;
      });
    },

    getStories() {
      return myAPI.get("/stories/").then(response => {
        return response.data;
      });
    },

    cancelEditing() {
      this.edit = false
    },

    addNewStory() {
      this.edit = true
    },

    submitNewStory() {
      this.edit = false
      myAPI.post("/stories/", { text: this.text }).then(response => {
        this.getStories().then(stories => {
          this.allStories = stories
        })
        return response.data;
      })
      this.text = ""
    },
  },

  components: {
    tagStories: Stories
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

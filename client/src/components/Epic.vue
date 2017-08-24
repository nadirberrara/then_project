<template>
  <section class="hero">

    <div class="">

      <div v-if="epic && allStories" class="epic">
        <div class="titre">
          <i>by Nadir </i>
          <h3 class="title"> {{ epic.title }} </h3>
          <p>-</p>
          <p>{{epic.mainStory}}</p>
        </div>

        <div>
          <div class="suite">
            <p v-for="nextStory in epic.nextStories">
              <span class="blue">
                then,
              </span> {{ nextStory }}</p>
          </div>

        </div>
      </div>
      <div v-if="!edit" class="is-white andThenButton">
        <button v-on:click="addNewStory()" class="button is-large">my then</button>
      </div>
      <div class="column is-gapless">
        <div v-if="!edit">
          <div class="stories">
            <div>
              <tag-stories :stories="allStories" :epicId="epic._id" v-on:nextStory="addNext"> </tag-stories>
            </div>
          </div>
        </div>

        <div class="addStory" v-else>
          <span class="tag is-medium">then,</span>
          <textarea class="textarea is-medium" name="newStory" cols="80" rows="3" v-model="text">
          </textarea>
          <span class="tag is-medium">then,</span>
          <br><br>
          <button class="button" type="submit" v-on:click="submitNewStory()"> submit my story </button>
          <button class="button" type="submit" v-on:click="cancelEditing()"> cancel </button>
        </div>

      </div>

    </div>

  </section>
</template>

<script>
import axios from "axios";
import Stories from "@/components/Stories";

const myAPI = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? '/api' : "http://localhost:3000/api"
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
      console.log("this.$route", this.$route);
      return myAPI.get("/epics/" + this.$route.params.epicId + "/stories").then(response => {
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
      myAPI.post("/epics/" + this.epic._id + "/stories", { text: this.text }).then(response => {
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
span.blue {
  color: #06425C
}

.titre {
  background-color: rgba(81, 163, 157, 0.9);
  color: white;
  padding: 20px;
  border: 3px white solid;
}

.suite {
  background-color: rgba(205, 187, 121, 0.9);
  color: white;
  padding: 20px;
  margin-top: -10px;
  border: 3px white solid;
}

,
.andThenButton {
  margin-top: 10px
}

h3.title {
  color: #06425C
}

.epic {
  margin: 13px
}

.tag {
  background-color: rgba(205, 187, 121, 0.9);
  color: white;
  border: white solid 3px
}
</style>

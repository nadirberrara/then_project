<template>
  <div class="epic">
  
    <div v-if="epic && allStories" class="epic" :style="styles">
      <i>by Nadir </i>
      <h1> {{ epic.title }} </h1>
      <div>
        <p>{{epic.mainStory}}</p>
        <strong>then</strong>
        <p>{{ epic.nextStories}}</p>
        </p>
      </div>
    </div>
  
    <button v-on:click="addNewStory()" :style="stylesButton">and then</button>
  
    <div class="addStory" v-if="edit">
        <p><i>(do not finish by "then", we do it for you ;))</i></p>
        <strong>then,</strong>        
      <textarea name="newStory" cols="80" rows="3" v-model="text">
      </textarea>
      <br>
      <button type="submit" v-on:click="submitNewStory()"> submit my story </button>
    </div>
  
    <div class="stories" :style="styles">
      <div>
        <tag-stories :stories="allStories"> </tag-stories>
      </div>
    </div>
  
  </div>
</template>

<script>
import axios from "axios";
import Stories from "@/components/Stories";


export default {
  name: "hello",
  data() {
    return {
      text: '',
      epic: {},
      story: {},
      allStories: [],
      edit: false,
      styles: {
        border: "1px solid grey",
        margin: "20px 80px",
        padding: "20px"
      },
      stylesButton: {
        padding: "20px",
        margin: "20px"
      }
    };
  },
  created() {
    const myAPI = axios.create({
      baseURL: "http://localhost:3000/api/"
    });


    function getEpic(epicId) {
      return myAPI.get('/epics/' + epicId).then(response => {
        return response.data;
      });
    }

    getEpic(this.$route.params.epicId).then(epic => {
      this.epic = epic
    });


    function getStories() {
      return myAPI.get("/stories/").then(response => {
        return response.data;
      });
    }

    getStories().then(stories => {
      console.log(stories)
      this.allStories = stories
    })

    // function postStory(text) {
    //   return myAPI.post("/stories/", { text: text }).then(response => {
    //     return response.data;
    //   })
    // }

  },
  methods: {
    addNewStory() {
      this.edit = true
    },
    submitNewStory() {
      this.edit = false

      const myAPI = axios.create({
        baseURL: "http://localhost:3000/api/"
      });

      myAPI.post("/stories/", { text: this.text }).then(response => {
        return response.data;
      })
    }
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

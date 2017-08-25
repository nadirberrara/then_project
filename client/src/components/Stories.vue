<template>
    <div>

        <div class="block scroll">
            <div class="story" v-for="story in stories">
                <span>then, {{ story.text }}</span>
                <span class="is-pulled-right">
                    <button @click="$emit('like-story', story._id)" class="button is-right">
                        <i class="fa fa-thumbs-o-up"></i> {{ story.likes.length }}
                    </button>
                </span>

            </div>
            <button class="button" v-if="$root.user && $root.user.id === epic.userId" type="submit" @click="$emit('push-story')"> Push the best story </button>

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
    props: ["stories", "epic"],
    data() {
        return {
            like: null,
            story: null,
            userId: null
        }
    },
};



</script>

<style scoped>
.story {
    background-color: #CDBB79;
    color: white;
    overflow-y: scroll;
    border: 2px white solid;
    margin-bottom: 1rem;
    word-break: break-word;
}

.story button i {
    margin-right: .5rem;
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

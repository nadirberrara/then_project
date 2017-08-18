<template>
    <div>
        <div>
            <h3>STORIES SUGGESTED:</h3>
            <div v-for="story in stories">
                <p :style="styles">
                <strong>then,</strong>
                    {{ story.text }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    props: ["stories"],
    data() {
        return {
            styles: {
                border: "1px solid grey",
                padding: "20px"
            }
        }
    }

};
</script>


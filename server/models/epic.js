var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const EpicSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  mainStory: {
    type: String,
    required: true
  },
  nextStories: {
    type: {},
    required: true
  },
  userId: {
    type: Array,
    required: true
  }
});

module.exports = mongoose.model("Epic", EpicSchema);

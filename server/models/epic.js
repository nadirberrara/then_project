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
    type: Array
    // required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Epic", EpicSchema);

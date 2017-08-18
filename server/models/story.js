var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const StorySchema = new Schema({
  epicId: {
    type: Object
  },
  text: {
    type: String
  },
  isSelected: {
    type: Boolean
  },
  userId: {
    type: Object
  },
  username: {
    type: String
  }
});

module.exports = mongoose.model("Story", StorySchema);

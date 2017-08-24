var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const StorySchema = new Schema({
  epic: {
    type: Schema.Types.ObjectId,
    ref: "Epic"
    // required: true
  },
  text: {
    type: String
    // required: true
  },
  isSelected: {
    type: Boolean
  },
  userId: {
    type: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  username: {
    type: String
  },
  likes: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ]
  }
});

module.exports = mongoose.model("Story", StorySchema);

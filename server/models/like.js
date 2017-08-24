var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const LikeSchema = new Schema({
  storyId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true
  }
});

module.exports = mongoose.model("Like", LikeSchema);

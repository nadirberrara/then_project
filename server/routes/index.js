var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/thenProject");
var Schema = mongoose.Schema;

var Epic = require("../models/epic.js");
var Story = require("../models/story.js");

router.get("/", (req, res, next) => {
  res.json("Home");
});

router.get("/api/epics/", (req, res, next) => {
  Epic.find(req.params, function(err, epic) {
    if (err) res.json("epic not find");
    else res.json(epic);
  });
});

router.get("/api/epics/:id", (req, res, next) => {
  Epic.findById(req.params.id, function(err, epic) {
    if (err) res.json("epic not find");
    else res.json(epic);
  });
});

router.get("/api/epics/:epicId/stories/", (req, res, next) => {
  var epicId = req.params.epicId;
  Story.find({ epic: epicId }, function(err, story) {
    if (err) res.json("story not find");
    else res.json(story);
  });
});

router.post("/api/epics/:epicId/stories/", (req, res) => {
  console.log("req.params.epicId", req.params.epicId);
  console.log("req.body.text", req.body.text);
  let myStory = new Story({
    text: req.body.text,
    epic: req.params.epicId
  });
  console.log("myStory", myStory);
  myStory.save(function(err, doc) {
    if (err) {
      res.json({
        message: "story not created",
        err: err
      });
    } else {
      res.json({ text: req.body });
    }
  });
});

router.post("/api/epics/", (req, res) => {
  let myEpic = new Epic({
    title: req.body.title,
    mainStory: req.body.mainStory,
    nextStories: []
  });
  myEpic.save(err => {
    if (err) res.json(err);
    else res.json("OK");
  });
});

// router.put("/api/epics/:id", function(req, res) {
//   Epic.findOneAndUpdate(
//     {
//       _id: req.paramas.id
//     },
//     {
//       $set : { "nextStories" : }
//     },
//     function(err) {
//       if (err) {
//         res.json({ message: "error updating title" });
//       } else {
//         res.json({ text: req.body });
//       }
//     }
//   );
// });

// router.put("/api/epics/:id", function(req, res) {
//   Epic.update(
//     { _id: epics._id },
//     { $push: { nextStories: newStory } },
//     { safe: true, upsert: true },
//     function(err, newStory) {
//       if (err) {
//         res.json({ message: "error updating nexStories" });
//       }
//     }
//   );
// });

router.post("/api/epics/:id/nextStories", function(req, res) {
  let newNextStory = new Story();
});

module.exports = router;

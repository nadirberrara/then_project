var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/thenProject");
var Schema = mongoose.Schema;
var { ObjectId } = mongoose.Types;
var Epic = require("../models/epic.js");
var Story = require("../models/story.js");
var Like = require("../models/like.js");

router.get("/", (req, res, next) => {
  Epic.find(req.params, function(err, epic) {
    if (err) res.json("epic not find");
    else res.json(epic);
  });
});

router.get("/:id", (req, res, next) => {
  Epic.findById(req.params.id, function(err, epic) {
    if (err) res.json("epic not find");
    else res.json(epic);
  });
});

router.get("/:epicId/stories/", (req, res, next) => {
  var epicId = req.params.epicId;
  Story.find({ epic: epicId }, function(err, stories) {
    if (err) res.json("stories not find");
    else {
      // for (var i = 0; i < stories.length; i++) {
      //   var counter = 0;
      //   var storyId = stories[i]._id;
      //   Like.find({ story: storyId }, function(err, likes) {
      //     counter++;
      //     stories[0].nbOfLikes = 12;
      //     if (counter === stories.length) {
      //       res.json(stories);
      //     }
      //   });
      // }
      // // TEST
      //   stories[0].test = "Test";
      //   res.json(stories[0]);
    }
  });
});

router.post("/:epicId/stories/", (req, res) => {
  let myStory = new Story({
    text: req.body.text,
    epic: req.params.epicId
  });
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

router.post("/", (req, res) => {
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

router.post("/:epicId/add-random-story", (req, res) => {
  Epic.findById(req.params.epicId, function(err, epic) {
    Story.find(
      {
        epic: ObjectId(req.params.epicId)
      },
      function(err, stories) {
        if (err) {
          res.status(400).json("stories not find");
        } else {
          const randomStory =
            stories[Math.floor(Math.random() * stories.length)];

          epic.nextStories.push(randomStory.text);
          epic.save(function(err, doc) {
            if (err) res.json(err);
            else res.json(epic);
          });
        }
      }
    );
  });
});

router.post("/likes", (req, res) => {
  let newLike = new Like({
    userId: req.body.userId,
    storyId: req.body.storyId
  });
  newLike.save(err => {
    if (err) res.json({ error: err });
    else res.json("Liked");
  });
});

module.exports = router;

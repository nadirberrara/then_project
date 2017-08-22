var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/thenProject");
var Schema = mongoose.Schema;
var { ObjectId } = mongoose.Types;
var Epic = require("../models/epic.js");
var Story = require("../models/story.js");

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
  Story.find({ epic: epicId }, function(err, story) {
    if (err) res.json("story not find");
    else res.json(story);
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

module.exports = router;

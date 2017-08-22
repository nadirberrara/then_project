var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/thenProject");
var Schema = mongoose.Schema;
var cron = require("node-cron");

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

router.post("/epics/:epicId/addRandomStory", (req, res) => {
  Epic.findById(req.params.epicId, function(err, epic) {
    Story.find(
      {
        epicId: req.params.epicId
      },
      function(err, stories) {
        if (err) res.json("stories not find");
        else res.json(stories);
      }
    ).nextStory.save(function(err, doc) {
      if (err) res.json(err);
      else res.json("Next story added with success");
    });
  });
});

module.exports = router;

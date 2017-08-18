var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/thenProject");

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

router.get("/api/stories/", (req, res, next) => {
  Story.find(req.params, function(err, story) {
    if (err) res.json("story not find");
    else res.json(story);
  });
});

router.post("/api/stories/", (req, res) => {
  let myStory = new Story({ text: req.body.text });
  myStory.save(function(err) {
    if (err) {
      res.json({ message: "story not created" });
    } else {
      res.json({ text: req.body });
    }
  });
});

module.exports = router;

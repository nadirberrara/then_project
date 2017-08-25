var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/thenProject");
var Schema = mongoose.Schema;
var { ObjectId } = mongoose.Types;
var Epic = require("../models/epic.js");
var Story = require("../models/story.js");
var Like = require("../models/like.js");

const { ensureLoggedIn } = require("../middlewares");

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
      res.json(stories);
    }
  });
});

router.post("/:epicId/stories/", ensureLoggedIn, (req, res) => {
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

router.post("/", ensureLoggedIn, (req, res, next) => {
  let myEpic = new Epic({
    title: req.body.title,
    mainStory: req.body.mainStory,
    nextStories: [],
    userId: req.user._id
  });
  myEpic.save(err => {
    if (err) next(err);
    else res.json(myEpic);
  });
});

router.post("/:epicId/add-next-story", (req, res, next) => {
  Epic.findById(req.params.epicId, function(err, epic) {
    if (err) return next(err);
    if (!epic.userId.equals(req.user._id)) {
      return res.sendStatus(403);
    }
    Story.find(
      {
        epic: req.params.epicId
      },
      (err, stories) => {
        if (err) return next(err);
        if (!stories.length) return res.status(400).json("No stories");
        const bestStory = stories.reduce((best, current) => {
          if (current.likes.length > best.likes.length) return current;
          return best;
        });
        epic.nextStories.push(bestStory.text);
        Story.deleteMany({
          epic: req.params.epicId
        }).exec();
        epic.save((err, epic) => {
          if (err) return next(err);
          res.json(epic);
        });
      }
    );
  });
});

router.post("/likes", ensureLoggedIn, (req, res) => {
  var { storyId } = req.body;
  var userId = req.user._id;
  Story.findOne({ _id: storyId }, (err, story) => {
    if (err || !story) res.json({ error: err ? err : "No story found" });
    else {
      console.log("story", story);
      console.log(userId);
      if (story.likes.indexOf(userId) !== -1) {
        // userId is in story.likes
        res.json({
          msg: "The user already liked this story",
          nbOfLikes: story.likes.length,
          story: story
        });
      } else {
        story.likes.push(userId);
        Story.findByIdAndUpdate(
          storyId,
          { $set: { likes: story.likes } },
          (err, newStory) => {
            res.json({
              msg: "New like",
              nbOfLikes: story.likes.length,
              story: story
            });
          }
        );
      }
    }
  });
});

module.exports = router;

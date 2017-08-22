require("dotenv").config();
const history = require("connect-history-api-fallback");
var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });
const epics = require("./routes/epics");
const authRoutes = require("./routes/auth");
const passport = require("passport");
const User = require("./models/user");
const config = require("./config");
const { Strategy, ExtractJwt } = require("passport-jwt");
const cors = require("cors");
const { ensureLoggedIn, ensureLoggedOut } = require("connect-ensure-login");

var app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  cors({
    origin: "http://localhost:8080"
  })
);

passport.initialize();
// Create the strategy for JWT
const strategy = new Strategy(
  {
    // this is a config we pass to the strategy
    // it needs to secret to decrypt the payload of the
    // token.
    secretOrKey: config.jwtSecret,
    // This options tells the strategy to extract the token
    // from the header of the request
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  },
  (payload, done) => {
    // payload is the object we encrypted at the route /api/token
    // We get the user id, make sure the user exist by looking it up
    User.findById(payload.id).then(user => {
      if (user) {
        // make the user accessible in req.user
        done(null, user);
      } else {
        done(new Error("User not found"));
      }
    });
  }
);
// tell pasport to use it
passport.use(strategy);

// We populate ourselves req.user because we don't want to
// end up on an error when the authentication fails but rather
// keep user empty
app.use("/api", (req, res, next) => {
  const authenticate = passport.authenticate(
    "jwt",
    config.jwtSession,
    (err, user, fail) => {
      req.user = user;
      next(err);
    }
  );
  authenticate(req, res, next);
});

app.get("/api/me", (req, res) => {
  if (req.user) {
    res.json(req.user);
  } else {
    res.json({
      message: "You're not connected"
    });
  }
});

app.use("/api/epics", epics);
app.use("/api", authRoutes);

// This is an example of protected route
// If the user is not authenticated, he'll be get a 404
// This allows us to keep our routes secret
app.get(
  "/api/secret",
  // this is protecting the route and giving us access to
  // req.user
  ensureLoggedIn(),
  (req, res) => {
    // send the user his own information
    res.json(req.user);
  }
);

// This route is only accessible for non authenticated users
// If the user is not authenticated, he will be redirected to /
app.get(
  "/api/not-secret",
  // this is protecting the route and giving us access to
  // req.user
  ensureLoggedOut(),
  (req, res) => {
    // send the user his own information
    res.json({ message: "Go ahead" });
  }
);

const clientRoot = path.join(__dirname, "../client/dist");
app.use("/", express.static(clientRoot));
app.use(history("index.html", { root: clientRoot }));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  console.log(err);
  // return the error message only in development mode
  res.json(req.app.get("env") === "development" ? err.message : {});
});

module.exports = app;

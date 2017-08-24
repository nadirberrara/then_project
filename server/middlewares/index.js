function ensureLoggedIn(req, res, next) {
  if (!req.user) {
    res.sendStatus(401);
  } else {
    next();
  }
}

module.exports = {
  ensureLoggedIn
};

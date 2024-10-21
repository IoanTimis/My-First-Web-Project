function isLogged(req, res, next) {
  if (!req.session.loggedInUser || req.session.loggedInUser.type !== 'client') {
    return res.status(403).send("Access denied.");
  }
  next();
}

module.exports = {
  isLogged
};
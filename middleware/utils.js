function userSpecificMiddleware(req, res, next) {
  console.log("applying specific USER middleware");
  next();
}

function authenticationMiddleware(req, res, next) {
  console.log("Inside AUTHENTICATION middleware");
  next();
}

function loggingMiddleware(req, res, next) {
  console.log("Inside LOGGING middleware");
  next();
}

function detectHacker(req, res, next) {
  const userType = req.params.usertype;
  if (userType === "hacker") {
    const err = new Error("Hacker detected");
    next(err);
  }
  next();
}

module.exports = {
  userSpecificMiddleware,
  authenticationMiddleware,
  loggingMiddleware,
  detectHacker
};

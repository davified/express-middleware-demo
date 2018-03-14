const express = require("express");
const fetch = require("node-fetch");
const app = express();

// 1. import middleware
const {
  userSpecificMiddleware,
  authenticationMiddleware,
  loggingMiddleware,
  detectHacker
} = require("./middleware/utils");

// 2. use middleware
app.use(
  "/users",
  userSpecificMiddleware,
  authenticationMiddleware,
  loggingMiddleware
);

app.use("/teams", function(req, res, next) {
  console.log("applying specific TEAM middleware");
  console.log("time now: ", Date.now());
  next();
});

app.use("/users/:usertype", detectHacker);

// 3. define route handlers
app.get("/users", function(req, res) {
  res.send("GET /users");
});

app.get("/users/:usertype", function(req, res) {
  res.send("hello user");
});

app.get("/teams", function(req, res) {
  res.send("GET /teams");
});

// express.js default error handling middleware
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  console.log(err);
  res.send("error");
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});

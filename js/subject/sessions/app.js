const express = require("express");
const app = express();
const session = require("express-session");

app.use(
  session({
    secret: "thisisnotagoodsecret",
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/session", (req, res) => {
  if (req.session.count) {
    req.session.count += 1;
  } else {
    req.session.count = 1;
  }
  res.send(`YOU VISIT THIS PAGE ${req.session.count} times`);
});

app.get("/regist", (req, res) => {
  const { username } = req.query;
  req.session.username = username;
  res.redirect("/greet");
});

app.get("/greet", (req, res) => {
  res.send(`Welcome back ${req.session.username}`);
});

app.listen(3000, () => {
  console.log("PORT 3000");
});

const { json } = require("express");
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { v4: uuid } = require("uuid");

app.use(express.urlencoded({ extended: true }));
app.use(json()); //parsing the body from json to text.
app.set("views", path.join(__dirname, "view"));
app.set("view engine", "ejs");

const commentsArr = [
  {
    id: uuid(),
    username: "Nicolaas",
    comments: "I am so handsome yes",
  },
  {
    id: uuid(),
    username: "Nadine",
    comments: "I am so pretty",
  },
  {
    id: uuid(),
    username: "Michelle",
    comments: "Delete your comment nico!",
  },
  {
    id: uuid(),
    username: "TOKYOBET88",
    comments: "Join to our website TOKYOBET88.COM",
  },
];

app.get("/forms", (req, res) => {
  res.send("GET response");
});

app.get("/comments/new", (req, res) => {
  res.render("comments/form");
});

app.post("/comments", (req, res) => {
  const { username, comments } = req.body;
  commentsArr.push({ username, comments, id: uuid() });
  res.redirect("/comments");
});

app.get("/comments", (req, res) => {
  res.render("comments/index.ejs", { commentsArr });
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const val = commentsArr.find((x) => x.id === id);
  res.render("comments/show", { val });
});

app.post("/forms", (req, res) => {
  const { name, age } = req.body;
  res.send(`So your name is ${name} and your age is ${age}`);
});

app.listen(port, () => {
  console.log("im in port " + port);
});

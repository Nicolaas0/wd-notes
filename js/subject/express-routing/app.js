const express = require("express");
const app = express();
const port = 3000;
const shelterRouter = require("./Routes/shelter");
const dogsRouter = require("./Routes/dogs");

app.use("/shelters", shelterRouter);
app.use("/dogs", dogsRouter);

app.listen(port, () => {
  console.log("LISTENING ON PORT " + port);
});
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose
  .connect("mongodb://localhost:27017/RelationshipDemo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("ERROR");
    console.log(err);
  });

const userSchema = Schema({
  username: String,
  age: Number,
});

const tweetSchema = Schema({
  text: String,
  likes: Number,
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const User = mongoose.model("User", userSchema);
const Tweet = mongoose.model("Tweet", tweetSchema);

const newTweet = async () => {
  const u = new User({
    username: "Nicolaas",
    age: 20,
  });

  const t = new Tweet({
    text: "I like fromis_9",
    likes: 10,
  });
  t.user = u;
  u.save();
  t.save();
};

newTweet();

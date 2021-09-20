const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/RelationshipDemo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DATBASE CONNECTED");
  })
  .catch((err) => {
    console.log("ERROR");
    console.log(err);
  });

const userSchema = mongoose.Schema({
  first: {
    type: String,
    required: true,
  },
  last: {
    type: String,
    required: true,
  },
  address: [
    {
      _id: { id: false },
      street: String,
      city: String,
      state: String,
      country: {
        type: String,
        requried: true,
      },
    },
  ],
});

const User = mongoose.model("User", userSchema);

const makeUser = async () => {
  const user = new User({
    first: "Nadine",
    last: "Lerrick",
    address: {
      street: "Tanah Sareal",
      city: "Bogor",
      state: "Jawa Barat",
      country: "Indonesia",
    },
  });
  const u = user.save();
  console.log(u);
};

const addAdresses = async (id) => {
  const user = await User.findById(id);
  user.address.push({
    street: "Ciheleut",
    city: "Bogor",
    state: "Jawa Barat",
    country: "Indonesia",
  });
  const res = await user.save();
  console.log(res)
};

addAdresses("613e4706c5497da88c441e9e");

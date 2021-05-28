const login = async (uname, pass) => {
    if (!uname || !pass) throw "Please input the data";
    if (uname == 'Nicolaas' && pass == "akmu") {
      return uname;
    } else {
        throw 'Username or Password is wrong, please try again.'
  };
};

login('Nicolaas', 'akmud')
  .then((data) => {
    console.log(`Welcome ${data}!`);
  })
  .catch((err) => {
    console.log("Error!");
    console.log(err);
  });

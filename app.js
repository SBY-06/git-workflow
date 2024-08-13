const express = require("express");
const UserController = require("./controllers/UserController");
const app = express();
const PORT = 3000;

app.post("/register", UserController.register);

app.listen(PORT, () => {
  console.log("Jalan boss");
});

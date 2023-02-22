require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
<<<<<<< HEAD
  res.send("Hello");
=======
  res.send("Bye KrubPom");
>>>>>>> df93588732cad0be6b0d065787acea61c5de9fae
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

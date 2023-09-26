const express = require("express");
const dotenv = require("dotenv");
const functionHandler = require("./controller/handler");
const app = express();

dotenv.config({ path: "./.env" });

app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  console.log(req.body);
  res.json("Hello");
});

app.use("/sendmail", functionHandler);

app.listen(8202, () => {
  console.log(8202, " is On");
});

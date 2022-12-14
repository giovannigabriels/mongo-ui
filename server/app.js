const express = require("express");
const { mongoConnect } = require("./config");
const errorHandler = require("./middlewares/errorHandler");
const router = require("./routes");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);
app.use(errorHandler);
mongoConnect().then((db) => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});

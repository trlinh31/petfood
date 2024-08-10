const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/", require("./routes/product"));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

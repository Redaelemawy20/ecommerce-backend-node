const express = require("express");
const path = require("path");
const app = express();
const port = 4000;
const cors = require("cors");

const productRoutes = require("./routes/product");
const fileRoutes = require("./routes/file");

app.use(cors());
app.use("/products", productRoutes);
app.use("/files", fileRoutes);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

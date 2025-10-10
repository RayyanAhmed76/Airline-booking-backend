const express = require("express");
const { PORT } = require("./config/inndex");
const apiRoutes = require("./routes/index");
const app = express();

app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`server succesfully running on port: ${PORT}`);
});

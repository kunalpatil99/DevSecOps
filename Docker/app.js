const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Container security demo running");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

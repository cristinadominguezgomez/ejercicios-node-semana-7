const express = require("express");

const app = express();
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.get("/hour", (req, res) => {
  const date = new Date();
  console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
  res.statusCode = 200;
  res.end();
});

app.get("/dirActual", (req, res) => {
  console.log(__dirname);
  res.statusCode = 200;
  res.end();
});

app.use((req, res) => {
  console.log("Ruta no encontrada");
  res.statusCode = 404;
  res.end();
});

app.listen(3000, () => {
  console.log("Server running en http://localhost:3000");
});

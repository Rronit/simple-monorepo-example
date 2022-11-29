import express from "express";
const app = express();
const port = 8080;
app.get("/data", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json({ foo: "bar" });
});

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});

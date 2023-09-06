const express = require("express");
const mongoose = require("mongoose");

const postsRouter = require("./routes/posts");

const app = express();

mongoose.connect("mongodb://localhost:27017/exam_7");

mongoose.connection.on("connected", () => {
  console.log("Successfully connected to MongoDB");
});
//mongoose connection event 추가

app.get("/", (req, res) => {
  res.send("OK");
});

app.use("/posts", postsRouter);
//여기서 posts라는 경로에 postsRouter가 추가되어있음. 이제 postsRouter가 뭐하는지 가보자

app.listen(8080);

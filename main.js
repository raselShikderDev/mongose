import mongoose from "mongoose";
import express from "express";
import { toDos } from "./models/todo.js";

const myMongose = await mongoose.connect("mongodb://localhost:27017/todo");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const todo = new toDos({
    title: "First Schema",
    desc: "This is the first Schema which made ever by Rasel",
    isDone: false,
  });
  todo.save();
  res.json(todo);
});

app.get("/a", async (req, res) => {
  const b = await toDos.findOne()
  console.log(b)
  res.json({title: b.title, desc:b.desc})
})



app.listen(port, () => {
  console.log(`Server is Running on https://localhost:${port}`);
});

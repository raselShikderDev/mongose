import mongoose from "mongoose";


const toDosSchema = new mongoose.Schema({
  title: String,
  desc: String,
  isDone: Boolean,
});

export const toDos = mongoose.model('toDos', toDosSchema);
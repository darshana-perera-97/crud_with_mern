const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(
  "mongodb+srv://darshana:darshana@cluster0.zm2qv.mongodb.net/todo?retryWrites=true&w=majority"
);

const todoSchema = {
  title: String,
  description: String,
};

const Todo = mongoose.model("Todo", todoSchema);

app.post("/newtodo", (req, res) => {
  const newTodo = new Todo({
    title: req.body.title,
    description: req.body.description,
  });

  newTodo
    .save()
    .then((todo) => console.log(todo))
    .catch((err) => res.status(400).json("Error " + err));
});

app.get("/todos", (req, res) => {
  Todo.find()
    .then((todo) => res.json(todo))
    .catch((err) => res.status(400).json("Error: " + err));
});

app.put("/put/:id", (req, res) => {
  const updatedTodo = {
    title: req.body.title,
    description: req.body.description,
  };

  Todo.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: updatedTodo },
    (req, res, err) => {
      if (!err) {
        console.log("Todo updated");
      } else {
        console.log(err);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;

  Todo.findByIdAndDelete({ _id: id }, (req, res, err) => {
    if (!err) {
      console.log("Todo deleted");
    } else {
      console.log(err);
    }
  });
});

app.listen(port, function () {
  console.log("Express is running");
});

import express from "express";
import cors from "cors";
import "dotenv/config";
import { v4 as uuidv4 } from "uuid";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const todoList = [
  {
    id: 1793005300374,
    todo: "anjoom malik is fake",
    isComplete: false,
  },
];

app.get("/api/todo", (req, res) => {
  res.status(200).json(todoList);
});

app.post("/api/todo", (req, res) => {
  const { todo } = req.body;

  if (!("todo" in req.body)) {
    res.status(400).json({
      message: `${JSON.stringify(req.body)} : This Attribute not accepted`,
    });
    return;
  }

  const newTodo = {
    id: uuidv4(),
    todo: todo.trim(),
    isComplete: false,
  };

  todoList.push(newTodo);

  res.json(todoList);
});

app.put("/api/todo", (req, res) => {
  const { id, todo, isComplete } = req.body;

  const isExit = todoList.find((data) => data.id === id);

  if (isExit) {
    todoList.forEach((data) => {
      if (data.id === id) {
        data.todo = todo;
        data.isComplete = isComplete || false;
      }
    });

    return res.json(todoList);
  }

  res.status(400).json({
    message: `item with id ${id} does not available`,
  });
});

app.delete("/api/todo", (req, res) => {
  const { id } = req.body;

  const todoIndex = todoList.findIndex(
    (item) => item.id === id
  );

  if (todoIndex !== -1) {
    todoList.splice(todoIndex, 1);
    return res.json(todoList);
  }
  // the todo index is -1 is mean undefine or not in

  res.status(404).json({
    message: "Item does not exist"
  });
});

// app.get("*", (req, res) => {
//   res.status(404).json("eroooooooooooooooooor");
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

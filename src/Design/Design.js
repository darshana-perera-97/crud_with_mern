import React from "react";
import TodoList from "../TodoList/TodoList";
import AddnewTodo from "./AddnewTodo/AddnewTodo";
import Heading from "./Heading/Heading";

export default function Design() {
  return (
    <div>
      <Heading />
      <AddnewTodo />
      <TodoList />
    </div>
  );
}

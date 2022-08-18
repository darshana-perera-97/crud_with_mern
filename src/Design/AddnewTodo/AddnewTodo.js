import React from "react";
import axios from "axios";

export default function AddnewTodo() {
  const [todo, setTodo] = React.useState({
    title: "",
    description: "",
  });
  const [todos, setTodos] = React.useState([
    {
      title: "",
      description: "",
      _id: "",
    },
  ]);
  const [isPut, setIsPut] = React.useState(false);
  const [updatedTodo, setUpdatedTodo] = React.useState({
    title: "",
    description: "",
    id: "",
  });

  React.useEffect(() => {
    fetch("/todos")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setTodos(jsonRes))
      .catch((err) => console.log(err));
  }, [todos]);

  function handleChange(event) {
    const { name, value } = event.target;
    setTodo((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }
  function addTodo(event) {
    event.preventDefault();
    const newTodo = {
      title: todo.title,
      description: todo.description,
    };

    axios.post("/newtodo", newTodo);
    console.log(newTodo);
    alert("Todo added");

    setTodo({
      title: "",
      description: "",
    });
  }
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <input
        onChange={handleChange}
        name="title"
        value={todo.title}
        placeholder="title"
      ></input>
      <input
        onChange={handleChange}
        name="description"
        value={todo.description}
        placeholder="description"
      ></input>
      <button onClick={addTodo}>ADD ITEM</button>
    </div>
  );
}

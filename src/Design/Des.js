import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Heading from "./Heading/Heading";

export default function Des() {
  const [item, setItem] = useState({
    title: "",
    description: "",
  });
  const [items, setItems] = useState([
    {
      title: "",
      description: "",
      _id: "",
    },
  ]);

  const [isPut, setIsPut] = useState(false);
  const [updatedItem, setUpdatedItem] = useState({
    title: "",
    description: "",
    id: "",
  });

  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setItems(jsonRes))
      .catch((err) => console.log(err));
  }, [items]);

  function handleChange(event) {
    const { name, value } = event.target;
    setItem((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function addItem(event) {
    event.preventDefault();
    const newItem = {
      title: item.title,
      description: item.description,
    };

    axios.post("http://localhost:3001/newtodo", newItem);
    console.log(newItem);
    alert("item added");

    setItem({
      title: "",
      description: "",
    });
  }

  function deleteItem(id) {
    axios.delete("/delete/" + id);
    alert("item deleted");
    console.log(`Deleted item with id ${id}`);
  }

  function openUpdate(id) {
    setIsPut(true);
    setUpdatedItem((prevInput) => {
      return {
        ...prevInput,
        id: id,
      };
    });
  }

  function updateItem(id) {
    axios.put("/put/" + id, updatedItem);
    alert("item updated");
    console.log(`item with id ${id} updated`);
  }

  function handleUpdate(event) {
    const { name, value } = event.target;
    setUpdatedItem((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
    console.log(updatedItem);
  }
  return (
    <div>
      <Heading />
      <div style={{ padding: "20px", textAlign: "center" }}>
        {!isPut ? (
          <div className="main">
            <input
              onChange={handleChange}
              name="title"
              value={item.title}
              placeholder="title"
            ></input>
            <input
              onChange={handleChange}
              name="description"
              value={item.description}
              placeholder="description"
            ></input>
            <button onClick={addItem}>ADD ITEM</button>
          </div>
        ) : (
          <div className="main">
            <input
              onChange={handleUpdate}
              name="title"
              value={updatedItem.title}
              placeholder="title"
            ></input>
            <input
              onChange={handleUpdate}
              name="description"
              value={updatedItem.description}
              placeholder="description"
            ></input>
            <button onClick={() => updateItem(updatedItem.id)}>
              UPDATE ITEM
            </button>
          </div>
        )}
        {items.map((item) => {
          return (
            <div
              key={item._id}
              style={{ margin: "20px 0px", width: "100%", textAlign: "center" }}
            >
              <div
                id="back"
                style={{
                  width: "40%",
                  marginLeft: "30%",
                  padding: "15px 0px",
                  borderRadius: "10px",
                }}
              >
                <p
                  style={{
                    margin: "0px",
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                >
                  {item.title}
                </p>

                <p style={{ margin: "0px", fontSize: "18px" }}>
                  {item.description}
                </p>
                <button onClick={() => deleteItem(item._id)}>DELETE</button>
                <button onClick={() => openUpdate(item._id)}>UPDATE</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

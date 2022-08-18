import React from "react";

export default function AddnewTodo() {
  return (
    <div style={{ padding: "20px",textAlign:"center" }}>
      <input
        // onChange={handleChange}
        name="title"
        // value={item.title}
        placeholder="title"
      ></input>
      <input
        // onChange={handleChange}
        name="description"
        // value={item.description}
        placeholder="description"
      ></input>
      <button
      //    onClick={addItem}
      >
        ADD ITEM
      </button>
    </div>
  );
}

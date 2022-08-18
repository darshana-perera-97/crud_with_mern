import React from "react";

export default function SingleTodo() {
  return (
    <div style={{ margin: "20px 0px", width: "100%", textAlign: "center" }}>
      <div
        id="back"
        style={{
          width: "40%",
          marginLeft: "30%",
          padding: "15px 0px",
          borderRadius: "10px",
        }}
      >
        <p style={{ margin: "0px", fontSize: "25px", fontWeight: "bold" }}>
          Title
        </p>
        <p style={{ margin: "0px", fontSize: "18px" }}>Title</p>
        <div>
          <button>Update</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

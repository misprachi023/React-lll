import React, { useState } from "react";

const TodoItem = ({ task, toggleTask, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask(task.id, editedTask);
    setIsEditing(false);
  };

  return (
    <div
      style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        style={{ marginRight: "10px" }}
      />
      {isEditing ? (
        <input
          type="text"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
          style={{
            marginRight: "10px",
            flex: "1",
            padding: "8px",
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
            border: "none",
          }}
        />
      ) : (
        <span
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            flex: "1",
          }}
        >
          {task.text}
        </span>
      )}
      <button
        onClick={isEditing ? handleSave : handleEdit}
        style={{ marginRight: "10px" }}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;

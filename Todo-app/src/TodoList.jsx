import TodoItem from "./TodoItem";

const TodoList = ({ tasks, toggleTask, deleteTask, editTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
};

export default TodoList;

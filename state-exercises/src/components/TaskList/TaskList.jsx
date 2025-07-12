import TaskItem from "./TaskItem";
// import styles from "./TaskList.module.css";
function TaskList(props) {
  return (
    <div>
      <h3>Task List</h3>
      <p>
        {props.tasks.filter((task) => task.completed).length} of{" "}
        {props.tasks.length} tasks completed
      </p>
      {props.tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          text={task.text}
          completed={task.completed}
          onToggle={() => props.onTaskToggle(task.id)}
        />
      ))}

      {/* <div className="overlay">
        <button className={styles.buttonAdd}>Add Task</button>
        <button className={styles.buttonClear}>Clear Completed</button>
      </div> */}
    </div>
  );
}

export default TaskList;

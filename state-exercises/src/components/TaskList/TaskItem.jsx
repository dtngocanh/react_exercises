import styles from "./TaskItem.module.css";

function TaskItem({ text, completed, onToggle }) {
  return (
    <div className={styles.task}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={completed}
        onChange={onToggle}
      />
      <span
        className={styles.label}
        style={{
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        {text}
      </span>
    </div>
  );
}

export default TaskItem;

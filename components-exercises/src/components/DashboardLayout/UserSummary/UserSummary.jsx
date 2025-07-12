import styles from "./UserSummary.module.css";

export default function UserSummary() {
  return (
    <div className={styles.userSummary}>
      <div>
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>

      <div className={styles.avatar}></div>
    </div>
  );
}

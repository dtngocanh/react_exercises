import styles from "./Sidebar.module.css";
function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <ul className={styles.sidebarUl}>
        <li className={styles.sidebarLi}>Dashboard</li>
        <li className={styles.sidebarLi}>Settings</li>
        <li className={styles.sidebarLi}>Logout</li>
      </ul>
    </aside>
  );
}
export default Sidebar;

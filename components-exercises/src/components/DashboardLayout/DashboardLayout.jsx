import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./DashboardLayout.module.css";
import UserSummary from "./UserSummary/UserSummary";
function DashboardLayout() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.mainArea}>
        <UserSummary />
        <h1>Welcome you!</h1>
        <Footer />
      </div>
    </div>
  );
}

export default DashboardLayout;

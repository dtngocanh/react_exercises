import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import style from "./SimplePage.module.css";
function SimplePage() {
  return (
    <div className={style.container}>
      <Header />
      <Sidebar />
      <div style={{ gridArea: "content", backgroundColor:"#fafafa" }}>This is my simple page.</div>
      <Footer />
    </div>
  );
}

export default SimplePage;

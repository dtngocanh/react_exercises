import DashboardLayout from "./components/DashboardLayout/DashboardLayout";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import Navbar from "./components/Navbar/Navbar";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import SimplePage from "./components/SimplePage/SimplePage";
import StaticArticle from "./components/StaticArticle/StaticArticle";
import StaticButton from "./components/StaticButton/StaticButton";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Header />
      <Footer />
      <StaticButton />
      <SimplePage />
      <Gallery />
      <Navbar />
      <LoadingSpinner />
      <ProfileCard />
      <StaticArticle />
      <DashboardLayout/>
    </div>
  );
}

export default App;

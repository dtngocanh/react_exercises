import { useState } from "react";
import "./App.css";
import UserProfile from "./components/UserProfile/UserProfile";
import Button from "./components/Button/Button";
import Alert from "./components/Alert/Alert";
import PostList from "./components/PostList/PostList";
import DataLoader from "./components/DataLoader/DataLoader";
import AuthPanel from "./components/AuthPanel/AuthPanel";
import LikeButton from "./components/LikeButton/LikeButton";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";
import Theme from "./components/Themes/Theme";
import BookList from "./components/BookList/BookList";
import ProductCard from "./components/ProductCard/ProductCard";
import TaskList from "./components/TaskList/TaskList";
import ShoppingCard from "./components/ShoppingCard/ShoppingCard";
import ListContainer from "./components/ListContainer/ListContainer";
function App() {
  const stylesButton = {
    Primary: {
      backgroundColor: "blue",
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "5px",
    },
    Outline: {
      backgroundColor: "transparent",
      color: "#007bff",
      border: "2px solid blue",
      padding: "10px 20px",
      borderRadius: "5px",
    },
    Default: {
      backgroundColor: "#e0e0e0",
      color: "#333",
      border: "none",
      padding: "10px 20px",
      borderRadius: "5px",
    },
    Text: {
      backgroundColor: "transparent",
      color: "blue",
      border: "none",
      padding: "10px 20px",
    },
    Link: {
      backgroundColor: "transparent",
      color: "blue",
      border: "none",
      padding: "10px 20px",
      textDecoration: "underline",
    },
  };

  const [tasks, setTasks] = useState([
    { id: 1, text: "Do homework", completed: false },
    { id: 2, text: "Buy milk", completed: true },
    { id: 3, text: "Buy groceries", completed: true },
    { id: 4, text: "Clean house", completed: true },
    { id: 5, text: "Pick up son", completed: true },
  ]);

  function handleToggle(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <>
      <UserProfile name="Ngoc Anh" age="21" bio="hello" />

      <div>
        <Button type={stylesButton.Primary} text="Primary" />
        <Button type={stylesButton.Outline} text="Outline" />
        <Button type={stylesButton.Default} text="Default" />
        <Button type={stylesButton.Text} text="Text" />
        <Button type={stylesButton.Link} text="Link" />
      </div>

      <div>
        <Alert type="success" />
        <Alert type="error" />
        <Alert type="warning" />
        <Alert type="infor" />
      </div>

      <PostList />

      <DataLoader />

      <AuthPanel />

      <LikeButton />

      <FeedbackForm />

      <Theme />

      <h2>Book List</h2>
      <BookList />

      <h2>Product List</h2>
      <ProductCard
        image="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg"
        title="Wireless Headphones"
        price="99.99"
        inStock={true}
      />

      <TaskList tasks={tasks} onTaskToggle={handleToggle} />

      <ShoppingCard />

      <ListContainer showList={true} items={["Apple", "Banana", "Orange"]} />
    </>
  );
}

export default App;

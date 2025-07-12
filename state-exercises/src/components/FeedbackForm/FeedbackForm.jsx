import { useState } from "react";
import style from "./FeedbackForm.module.css";
function FeedbackForm() {
  const [feedback, setFeedback] = useState("");
  function addFeedback(event) {
    const text = event.target.value;
    setFeedback(text);
  }
  return (
    <div className={style.container}>
      <textarea
      className={style.textarea}
        onChange={addFeedback}
        name="text"
        placeholder="Enter your feedback here."
      ></textarea>
      <p>{feedback}</p>
    </div>
  );
}
export default FeedbackForm;

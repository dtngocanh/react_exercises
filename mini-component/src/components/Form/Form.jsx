import { useState } from "react";
import styles from "./Form.module.css";

function Form() {
  const [infor, setInfor] = useState({
    name: "",
    email: "",
  });
  const [submittedMessage, setSubmittedMessage] = useState("");
  function handleChange(event) {
    const { name, value } = event.target;
    setInfor((preInfor) => ({ ...preInfor, [name]: value }));
  }
  function handleClick(event) {
    event.preventDefault();
    setSubmittedMessage(`You've submitted: ${infor.name} - ${infor.email}`);
    console.log(`You've submitted ${infor.name} ${infor.email}`);
  }

  return (
    <div>
      <form className={styles.form}>
        <label htmlFor="">Name:</label>
        <input
          value={infor.name}
          name="name"
          onChange={handleChange}
          className={styles.input}
          type="text"
        />
        <label htmlFor="">Email:</label>
        <input
          value={infor.email}
          name="email"
          onChange={handleChange}
          className={styles.input}
          type="text"
        />
        <button onClick={handleClick} className={styles.button}>
          Submit
        </button>
      </form>
      {submittedMessage && <p className={styles.message}>{submittedMessage}</p>}
    </div>
  );
}

export default Form;

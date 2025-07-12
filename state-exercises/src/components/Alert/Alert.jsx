import style from "./Alert.module.css";
function Alert(props) {
  return (
    <div className={`${style.alert} ${style[props.type]}`}>
      <span className={style.icon}>
        {props.type === "success" && "✔"}
        {props.type === "error" && "❗"}
        {props.type === "warning" && "⚠️"}
        {props.type === "infor" && "ℹ️"}
      </span>
      <span>
        {props.type === "success" &&
          "Success! Your message has been sent successfully."}
        {props.type === "error" &&
          "Error! A problem has occured while submiiting your data."}
        {props.type === "warning" &&
          "Warning! There was a problem with your network connection."}
        {props.type === "infor" && "Infor! Please read the comments carefully."}
      </span>
      <span class="close">&times;</span>
    </div>
  );
}
export default Alert;

function Button(props) {
  const { type, text } = props;

  return <button style={type}>{text}</button>;
}

export default Button;

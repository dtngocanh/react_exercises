function ListContainer(props) {
  return (
    <div>
      {props.showList && (
        <ul>
          {props.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListContainer;

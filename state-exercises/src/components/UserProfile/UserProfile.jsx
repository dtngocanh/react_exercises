function UserProfile(props) {
  return (
    <div>
      <p>
        Hello, I am {props.name} and I am {props.age} years old.
      </p>
      <p>My bio: {props.bio}</p>
    </div>
  );
}
export default UserProfile;

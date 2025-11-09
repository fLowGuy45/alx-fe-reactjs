const UserProfile = (props) => {
  return (
    <div style={{
      border: "2px solid #ccc",
      borderRadius: "12px",
      padding: "16px",
      margin: "20px auto",
      maxWidth: "300px",
      boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
      textAlign: "center"
    }}>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;


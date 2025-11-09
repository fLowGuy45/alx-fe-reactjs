const UserProfile = (props) => {
  return (
    <div style={{
      border: '2px solid gray',
      borderRadius: '10px',
      padding: '15px',
      margin: '20px auto',
      maxWidth: '350px',
      backgroundColor: '#fafafa',
      boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: 'blue', marginBottom: '8px' }}>{props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;

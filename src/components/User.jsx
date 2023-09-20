function User({ id, name, email, username }){
    return (
        <div style={{ border: `2px solid black` }}>
            <div>ID: {id}</div>
            <div>Name: {name.toUpperCase()}</div>
            <div>Email: {email}</div>
            <div>Username: {username}</div>
          </div>
    );
}

export default User;
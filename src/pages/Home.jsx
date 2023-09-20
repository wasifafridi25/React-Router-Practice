import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "../components/User.jsx";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(data);
    setUsers(data);
  }

  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
    }, 500);
  }, []);

  // return <h1>{users.length > 0 && users[0].name}</h1>
  // return <h1>{users.length > 0 ? users[0].name : null}</h1>
  // return <h1>{users[0]?.name}</h1>
  const pixels = "2px";

  return (
    <div>
      {users.length > 0 ? <h1>{users[0].name}</h1> : <h1>Loading...</h1>}
      <div>
        <h1>List of users with details</h1>
        {users.map((user) => (
        <Link to={`/users/${user.id}`} key={user.id}>
          <User
          
            id={user.id}
            name={user.name}
            email={user.email}
            username={user.username}
          />
        </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;

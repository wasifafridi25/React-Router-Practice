import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import axios from "axios";

function Users(){
    const { id } = useParams()
    // const { id } = useParams()
    // console.log(useParams())
    console.log(id)

    const [user, setUser] = useState({})
    
    async function getUser(){
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        console.log(data)
        setUser(data)
    } 

    useEffect(() => {
        getUser()
    }, [])

    return (
        <div>
            <Link to={`/`}> Go Back</Link>
            <h1>{id}</h1>
            <div>{user.name}</div>
            <div>{user.username}</div>
            
        </div>
    );
}

export default Users;
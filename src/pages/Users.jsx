import { useParams } from "react-router-dom";
import React, { useEffect } from 'react'

function Users(){
    const { username } = useParams()
    // const { id } = useParams()
    // console.log(useParams())
    console.log(username)

    useEffect(() => {
        // fetch(`https://api.instagram.com/${username}`)
    }, [])

    return (
        <h1>{username}</h1>
    );
}

export default Users;
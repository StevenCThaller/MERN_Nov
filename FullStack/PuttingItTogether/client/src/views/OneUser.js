import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import axios from 'axios';

const OneUser = props => {
    const [user, setUser] = useState({
        name: "Loading...",
        age: 0
    });
    
    useEffect(() => {
        // fetch data on this one user based in the id in the route
        axios.get(`http://localhost:8000/api/users/${props.id}`)
            .then(response => {
                const userFromServer = response.data.data;
                setUser(userFromServer);
            });
    }, [])

    return (
        <div>
            <h1>{user.name}'s Page</h1>
            {
                user.age < 18 ?
                <p>{user.name} is underaged. As such, we will not display their information</p>
                :
                <p>{user.name} is {user.age} years old</p>
            }
        </div>
    )
}

export default OneUser

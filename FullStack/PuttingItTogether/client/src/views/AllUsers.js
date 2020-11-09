import React, { useState, useEffect } from 'react'
// import axios
import axios from 'axios';
// import our react routing
import { Link } from '@reach/router';
const AllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // retrieve all users from the database
        // first major tripping point: make sure we send the request to the actual back end rather than the client!!
        axios.get('http://localhost:8000/api/users')
            .then(response => setUsers(response.data.data))
            .catch(err => console.log(err));
    }, [])

    const deleteHandler = i => {
        axios.delete(`http://localhost:8000/api/users/${users[i]._id}`)
            .then(response => {
                // find a way to remove from index i in the users list in state
                setUsers(users.filter((item,index) => index != i));
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <div className="row">
                <div className="col-sm-8">
                    <h1>All Users</h1>
                </div>
                <div className="col-sm-4">
                    <Link to="/users/new">Add a User</Link>
                </div>
            </div>
            <ul>
                {
                    users.map((item, i) => <li key={i}><Link to={`/users/${item._id}`}>{item.name}</Link> - {item.age} | <Link to={`/users/edit/${item._id}`}>Edit</Link> | <button onClick={() => deleteHandler(i)}>Delete</button></li> )
                }
            </ul>
        </div>
    )
}

export default AllUsers

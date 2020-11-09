import React, { useState } from 'react'
import { Link, navigate } from '@reach/router';
import UserForm from '../components/UserForm';
import axios from 'axios';

const NewUser = () => {
    const [user, setUser] = useState({
        name: "",
        age: ""
    });
    const [errors, setErrors] = useState({
        name: "",
        age: ""
    })

    const changeHandler = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/users', user)
            .then(response => {
                const res = response.data;
                if(res.message == "error") {
                    // add the messages to our errors in state
                    setErrors(res.data.errors);
                } else {
                    navigate("/");
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <div className="row">
                <div className="col-sm-8">
                    <h1>Create a New User</h1>
                </div>
                <div className="col-sm-4">
                    <Link to="/">Go Home</Link>
                </div>
            </div>
            <div className="row">
                <UserForm 
                    changeHandler={ changeHandler }
                    submitHandler={ submitHandler }
                    user={ user }
                    errors={ errors }
                    action="Submit New User"
                />
            </div>
        </div>
    )
}

export default NewUser

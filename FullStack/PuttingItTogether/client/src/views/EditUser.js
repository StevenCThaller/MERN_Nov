import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import UserForm from '../components/UserForm';
const EditUser = props => {
    const { id } = props;
    const [user, setUser] = useState({
        name: "",
        age: ""
    });
    const [errors, setErrors] = useState({
        name: "",
        age: ""
    });

    const changeHandler = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const submitHandler = e => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/users/${id}`, user)
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

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/${id}`)
            .then(response => {
                console.log(response.data);
                if(response.data.message === "error" || response.data.data === null ){
                    navigate("/");
                } else {
                    setUser(response.data.data);
                }
            })
            .catch(err => console.log(err));
    }, [id])


    return (
        <div>
            <div className="row">
                <div className="col-sm-8">
                    <h1>Edit {user.name}</h1>
                </div>
                <div className="col-sm-4">
                    <Link to="/">Go Home</Link>
                </div>
            </div>
            <div className="row">
                <UserForm 
                    changeHandler={changeHandler}
                    submitHandler={submitHandler}
                    user={user}
                    errors={errors}
                    action="Update User"
                />
            </div>
        </div>
    )
}

export default EditUser

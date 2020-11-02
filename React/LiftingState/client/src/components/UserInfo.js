import React from 'react'

const UserInfo = props => {
    const { name, email } = props;
    return (
        <ul>
            <li>Name: {name}</li>
            <li>Email: {email}</li>
        </ul>
    )
}

export default UserInfo

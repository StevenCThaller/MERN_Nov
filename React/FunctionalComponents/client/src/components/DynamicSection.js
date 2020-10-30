import React, { useState } from 'react';

const DynamicSection = props => {
    const [name, setName] = useState("");
    const [haveRead, setHaveRead] = useState(false);

    const { header, text } = props;

    const readToggle = () => {
        setHaveRead(true);
    }

    return (
        <>
            <h1>{header}</h1>
            <h2>{name}</h2>
            <p>{text}  
            {
                haveRead ?
                <span>You already read this</span>
                :
                <button className="btn btn-primary" onClick={ readToggle }>Read</button>
            }
            </p>
        </>
    );
}

export default DynamicSection;
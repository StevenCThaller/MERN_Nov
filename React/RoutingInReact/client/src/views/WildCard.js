import React, { useEffect } from 'react'
import { navigate } from '@reach/router';

const WildCard = props => {
    const { clownnose, jokers, nintendo, bottle, mouse } = props;

    useEffect( () => {
        if(isNaN(nintendo)){
            console.log("Nintendo is not a number");
        } else {
            navigate("/");
        }
    }, []); 

    return (
        <div>
            <h1>We're gettin crazy up in here!</h1>
            <p>This is our clownose portion of the route: { clownnose }</p>
            <p>This is the jokers portion of the route: { jokers }</p>
            <p>This is the nintendo portion of the route: { nintendo }</p>
            <p>This is the bottle portion of the route: { bottle }</p>
            <p>This is the mouse portion of the route: { mouse }</p>
        </div>
    )
}

export default WildCard

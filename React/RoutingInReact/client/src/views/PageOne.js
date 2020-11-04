import React from 'react'
import CompOne from '../components/CompOne';


const PageOne = props => {
    const { state } = props;

    return (
        <div>
            This is the first page
            This is in state: { state }
            <CompOne />
        </div>
    )
}

export default PageOne

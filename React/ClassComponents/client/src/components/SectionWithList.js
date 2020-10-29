import React, { Component } from 'react'
import DynamicSection from './DynamicSection';

export class SectionWithList extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { header, text, list } = this.props;
        return (
            <>
                <DynamicSection header={header} text={text}/>
                <ul>
                    {
                        list.map((item,i) => <li key={i}>{item}</li>)
                    }
                </ul>
            </>
        )
    }
}

export default SectionWithList
// import React, { Component } from 'react'

// class DynamicSection extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             haveRead: false,
//             name: "Cody"
//         }
//     }

//     readToggle = () => {
//         this.setState({ haveRead: true })
//     }

//     render() {
//         const { header, text } = this.props;
//         const { haveRead, name } = this.state;
//         return (
//             <>
//                 <h1>{header}</h1>
//                 <h2>{name}</h2>
//                 <p>{text}  
//                 {
//                     haveRead ?
//                     <span>You already read this</span>
//                     :
//                     <button className="btn btn-primary" onClick={ this.readToggle }>Read</button>
//                 }
//                 </p>
//             </>
//         )
//     }
// }

// export default DynamicSection


// // Ternary Operation

// // 3 main parts to the ternary operator
//     // 1. The condition that is determining the outcome (this is what would normally go into the parentheses of an if check)
//     // 2. Action to take if the condition is true
//     // 3. Action to take if the condition is false
// // condition ? action1 : action2




import React, { Component } from 'react'

class NavBar extends Component {
    render() {
        return (
            <nav>
                <h1>Welcome to my website</h1>
                <a href="#">Home</a> | <a href="#">About</a> | <a href="#">Contact Us</a>
            </nav>
        )
    }
}

export default NavBar

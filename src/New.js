import React, { Component } from 'react'

class New extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hi all, Good Evening"
        }
    }

    changeMessage() {
        this.setState({
            message:"Myself Shanmukh from EverestDX"
        })
    }
    
    render() {
        return (
            <div>
              <h2>{this.state.message}</h2>
              <button onClick = {() => this.changeMessage()} className = "btn1">Click Me</button>
            </div>
        )
    }
}

export default New
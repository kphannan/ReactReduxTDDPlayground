import React, { Component } from 'react'
import './input.css'

class Input extends Component {

    render () {

        const {className,type,onKeyUp,id} = this.props
        return (
            <div className= {className}>
                <input type={type} id={id} onKeyUp={onKeyUp}  />
            </div>
        )
    }
}

export default Input;
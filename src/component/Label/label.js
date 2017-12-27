import React, { Component } from 'react'
import './label.css'

class Label extends Component {

    render () {
        const {className,id} = this.props
        return (
            <div className={className} id={id}>
                 <label>{this.props.children}</label>

            </div>
        )
    }
}

export default Label;
import React, { Component } from 'react'
import './descriptivetext.css'


class DescriptiveText extends Component {

    render () {
        const {className, id} = this.props
        return (
            <div className={className} id={id}>
                {this.props.children}
            </div>
    )
    }
}

export default DescriptiveText;
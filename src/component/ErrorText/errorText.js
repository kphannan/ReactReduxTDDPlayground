import React, { Component } from 'react'


class ErrorText extends Component {

    render () {
        const {errorMessage, id} = this.props
        return (
            <div className={"text-input-container error"}>
                <p className="error-msg"  id={id}>{errorMessage}</p>
            </div>
        )
    }
}

export default ErrorText;
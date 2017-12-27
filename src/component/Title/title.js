import React, { Component } from 'react'


class Title extends Component {

  render () {
    const CustomTag = `${this.props.tag}`;
    return (
        <div>
            <CustomTag style={this.props.styles}>
                {this.props.children}
            </CustomTag>
        </div>
    )
  }
}

export default Title;

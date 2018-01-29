// @flow

// import React, { Component } from 'react'
import React from 'react'
// import {Link} from 'react-router-dom'

import Title from '../Title/title'

import './pageTitle.css'

class PageTitle extends React.Component<Props> {

    // constructor( ...args: any ) {
    //     super( ...args )
    // }

    render() {
    	return (
    		<div className="page-title">
                <Title tag={this.props.tag}>{this.props.children}</Title>
    		</div>
    		);
    };
};

export default PageTitle;

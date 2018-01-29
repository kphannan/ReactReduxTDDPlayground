// @flow

// import React, { Component } from 'react'
import React from 'react'
import {Link} from 'react-router-dom'



export default class Homepage extends React.Component<Props> {


    render() {
    	return (
    		<div>
    			<h1>Homepage</h1>
    			<h2>Sub-header</h2>

    			<div style={{justifyContent:'flex-end',display:'flex'}}>
    			    <Link style={{marginRight:'0px'}} className="button tertiary" to="/roster">Roster</Link>
    			</div>
    		</div>
    		);
    };
};




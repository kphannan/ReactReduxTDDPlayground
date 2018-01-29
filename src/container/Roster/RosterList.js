// @flow

// import React, { Component } from 'react'
import React from 'react'
import {Link} from 'react-router-dom'

import PageTitle from '../../component/PageTitle/PageTitle'


class RosterList extends React.Component<Props> {

    // constructor( ...args: any ) {
    //     super( ...args )
    // }

    render() {
    	return (
    		<div>
                <PageTitle tag={'h1'}>Roster List</PageTitle>
                <Link className='button primary' to='/roster/new'>Add Rolling Stock</Link>
    		</div>
    		);
    };
};


export default RosterList;

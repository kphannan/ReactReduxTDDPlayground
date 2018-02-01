// @flow

// import React, { Component } from 'react'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {Link, withRouter} from 'react-router-dom'

import { Grid, Row, Col } from 'react-flexbox-grid'

import PageTitle from '../../component/PageTitle/PageTitle'
import Card from '../../component/Card/card';
import Title from '../../component/Title/title';
// import DescriptiveText from '../../component/DescriptiveText/descriptivetext';


import { rosterListActions } from '../../reducer/rosterList'
import type { RosterListState } from '../../reducer/rosterList';



// ----- React types
type ReactOnChangeEvent = {
    target: {
        value: string
    }
}

type ReactOnClickEvent = {
    target: {
        value: string
    }
}

type Props = {
    rosterEntry: RosterEntryState,
    actions: any
}


export class RosterList extends React.Component<Props> {

    isChecked                 : Function
    handleCheckboxClick       : Function


    constructor( ...args: any ) {
        super( ...args )

        // console.log( args );
        // const {rl} = args[0].rosterList;
        this.state = {rosterList: args[0].rosterList};
        // this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
    }

    // handleCheckboxClick( event: ReactOnClickEvent ) {

    // }

    // isValid( element: any ) : boolean {

    //     // return !(element.pristine || element.valid);
    //     return true;
    // }

    render() {

        // console.log( this.state )
        const {rosterList} = this.state;
        // console.log( rosterList )
        const rosterArray = rosterList ? rosterList.map(locomotive => <RosterEntry
            key={locomotive.id}
            name={locomotive.id}
            rosterEntry={locomotive}
            {...this.props}/>
        ) : undefined;
        // console.log( rosterArray );

            // console.log(this);
    	return (
    		<div>
                <PageTitle tag={'h1'}>Roster List</PageTitle>
                <Link className='button primary' to='/roster/new'>
                    Add Rolling Stock
                </Link>

                <Card> {/*  */}

                    <Title tag='h2'>Available Locomotives</Title>
                    <Grid fluid>
                        {rosterArray}
                    </Grid>
                </Card>


                <div style={{justifyContent:'flex-end',display:'flex'}}>
                    <Link style={{marginRight:'0px'}} className="button primary" to="/roster/new">Add Locomotive</Link>
                </div>
    		</div>
		);
    };
};


                        // <Row className='row-height'>
                        //     <Col sm={4} md={4} lg={4}>
                        //             <label>{this.props.rosterList[0].id}</label>
                        //     </Col>
                        // </Row>



/**
 * 
 */
            // <Row className={ this.state.checked ? 'taskRow highlight' : 'taskRow'}>

const RosterEntry = (props) => {

        return (
            <Row className='taskRow'>

                <Col md={1}>
                    {props.rosterEntry.id}
                </Col>

                <Col md={1}>
                    {props.rosterEntry.unitType}
                </Col>

                <Col md={1}>
                    {props.rosterEntry.kit.manufacturer}
                </Col>

                <Col md={1}>
                    <Link to={'/roster/' + props.rosterEntry.id}>Edit</Link>
                </Col>
            </Row>
        );
}


// class RosterEntryX extends React.Component<Props> {

//     constructor(props) {
//         super(props);
//         this.state = {checked: false};
//     }

//     // handleCheckboxClick() {
//     //     this.setState( {checked: !this.state.checked} );
//     // }

//     render() {

//         // console.log( this.props )
//         return(
//             <Row className={ this.state.checked ? 'taskRow highlight' : 'taskRow'}>

//                 <Col md={1}>
//                     {this.props.rosterEntry.id}
//                 </Col>

//                 <Col md={1}>
//                     {this.props.rosterEntry.unitType}
//                 </Col>

//                 <Col md={1}>
//                     {this.props.rosterEntry.kit.manufacturer}
//                 </Col>

//                 <Col md={1}>
//                     <Link to={'/roster/' + this.props.rosterEntry.id}>Edit</Link>
//                 </Col>
//             </Row>
//         );
//     };
// };




                            // <Row className={ isChecked(this.props.task) ? 'row-highlight' : 'row-noHighlight'}>

                            //     <Col xs md lg start="xs">
                            //         <div role="checkbox" aria-checked={isChecked(this.props.task) ? 'true' : 'false'} onClick={this.handleCheckboxClick.bind(this)} tabIndex="-1" id="cond1">
                            //             <label>{this.props.task.name}</label>
                            //         </div>
                            //     </Col>
                            //     <Col xs={2} md={2} lg={2} end="xs">
                            //         <button title="View" className="button sm">View</button>
                            //     </Col>
                            // </Row>


const mapStateToProps = (state) => ({
    rosterList: state.rosterList,
    forms: state.forms.rosterList
});

function mapDispatchToProps(dispatch) {
    return {
        actions:   bindActionCreators(rosterListActions, dispatch),
        // fetchData: (id) => dispatch(id)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RosterList))

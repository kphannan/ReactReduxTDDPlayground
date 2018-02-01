// @flow

// import React, { Component } from 'react'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {Link, withRouter} from 'react-router-dom'

import { Grid, Row, Col } from 'react-flexbox-grid'

import PageTitle from '../../component/PageTitle/PageTitle'
import Icon      from '../../component/Icon/icon'
import Card      from '../../component/Card/card'

import { rosterEntryActions } from '../../reducer/rosterEntry'
import type { rosterEntryState } from '../../reducer/rosterEntry';

export class AddRosterEntry extends React.Component<Props> {

    // constructor( ...args: any ) {
    //     super( ...args )
    // }

    render() {
    	return (
    		<div>
                <PageTitle tag="h1">Add Rolling Stock</PageTitle>
                <p><Icon name="" styles={{ }}/>
                    Note: If your product is made of multiple microservices,
                    each of them should be added as a separate application.</p>

                <Card>
                    <Grid fluid>
                        <Row className="row-height">
                            <Col md={3}>
                            <label htmlFor="app_name">Application Name</label>
                            </Col>
                        </Row>
                    </Grid>
                </Card>


                <div style={{justifyContent:'flex-end',display:'flex'}}>
                    <Link style={{marginRight:'0px'}} className="button tertiary" to="/roster">Cancel</Link>
                    &npsp;
                    <Link style={{marginRight:'0px'}} className="button tertiary" to="/roster">Add</Link>
                </div>
    		</div>
    		);
    };
};


const mapStateToProps = (state) => ({
    motivePower: state.motivePower,
    forms: state.forms.motivePower
});

function mapDispatchToProps(dispatch) {
    return {
        actions:   bindActionCreators(rosterEntryActions, dispatch),
        // fetchData: (id) => dispatch(id)
    }
}

// import { withRouter } from 'react-router-dom'
// export default withRouter(connect(mapStateToProps)(Something))

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddRosterEntry))




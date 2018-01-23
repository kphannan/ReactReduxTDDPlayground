// @flow

// import React, { Component } from 'react'
import React from 'react'
// import type { Types } from 'react'

import type { Reducer } from 'redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { Form, Control, Errors } from 'react-redux-form'
import Card from '../../component/Card/card';
import Title from '../../component/Title/title';
import { Grid, Row, Col } from 'react-flexbox-grid'


import { motivePowerActions } from '../../reducer/motivePower'
import type { MotivePowerState } from '../../reducer/motivePower';

import './motivePower.css'


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
    motivePower: MotivePowerState,
    actions: any
}

export class MotivePower extends React.Component<Props> {

        handleClick               : Function
        handleDecoderAddressChange: Function
        handleUnitIdChange        : Function
        handleRoadNameChange      : Function
        handleRoadNumberChange    : Function
        handleCommentChange       : Function
        handleUnitTypeChange      : Function
        handleManufacturerChange  : Function

    constructor( ...args: any ) {
        super( ...args )

        // console.log( this )
        this.handleClick                = this.handleButtonClick.bind(this)
        // this.handleDecoderAddressChange = this.handleDecoderAddressChange.bind(this)
        this.handleUnitIdChange         = this.handleUnitIdChange.bind(this)
        this.handleRoadNameChange       = this.handleRoadNameChange.bind(this)
        this.handleRoadNumberChange     = this.handleRoadNumberChange.bind(this)
        this.handleCommentChange        = this.handleCommentChange.bind(this)
        this.handleUnitTypeChange       = this.handleUnitTypeChange.bind(this)
        this.handleManufacturerChange   = this.handleManufacturerChange.bind(this)
        // this.handleChange = this.handleChange.bind(this) 
    }

    handleButtonClick( event: ReactOnClickEvent ) {

        this.props.actions.resetToDefaults();
    }

    handleDecoderAddressChange( event: ReactOnChangeEvent ) {

        this.props.actions.changeDecoderAddress( event.target.value );
    }


    handleUnitIdChange( event: ReactOnChangeEvent) {

        this.props.actions.changeUnitId( event.target.value );
    }

    handleRoadNameChange( event: ReactOnChangeEvent) {

        this.props.actions.changeRoadName( event.target.value, this.props.motivePower.number );
    }

    handleRoadNumberChange( event: ReactOnChangeEvent) {

        this.props.actions.changeRoadNumber( this.props.motivePower.scac, event.target.value );
    }

    handleCommentChange( event: ReactOnChangeEvent) {

        this.props.actions.changeComment( event.target.value );
    }

    handleUnitTypeChange( event: ReactOnChangeEvent) {

        this.props.actions.changeUnitType( event.target.value );
    }

    handleManufacturerChange( event: ReactOnChangeEvent) {

        this.props.actions.changeManufacturer( event.target.value );
    }



    // isValid( element: {pristine: boolean, valid: boolean}) {
    isValid( element: any ) {

        // return !(element.pristine || element.valid);
        return false;
    }


    render() {
        // console.log( this.props );
        // if (typeof props !== 'undefined') {
        //     // the variable is defined
        //     console.log('props.match: ', props.match)
        // }
        // else {
        //     console.log( 'props is not defined')
        // }
        // console.log( this.props.motivePower );
        // console.log( this.props.motivePower.decoder.address );

        return (
            <div>
                <label>Unit ID
                    <input  type='text'   
                            id='unit_id'
                            onChange={this.handleUnitIdChange.bind(this)}
                            value={this.props.motivePower.id}
                            placeholder='Unit ID'
                    />
                </label>
                <Form model="motivePower" autoComplete="off">
                    <Card>
                        <Title tag='h3'>Roster Entry</Title>
                        <Grid fluid>
                            <div className={this.isValid(this.props.motivePower.scac) ? 'text-input-container error' : 'text-input-container'}>
                                <Row className={this.isValid(this.props.motivePower.scac) ? 'valid' : 'error-label'}>
                                    <Col sm={4} md={4} lg={4}>
                                            <label>Road Name
                                                <Control.text
                                                        id='roadname_id'     
                                                        onChange={this.handleRoadNameChange.bind(this)}
                                                        model=".scac"
                                                        placeholder='Road Name'
                                                        validators={{
                                                            required: (val) => val.length,
                                                            maxLength: (val) => val.length <= 6
                                                        }}
                                                />
                                            </label>
                                    </Col>
                                    <Col sm={5} md={5} lg={5}>
                                        <div className={this.isValid(this.props.motivePower.scac) ? 'valid visibility: hidden' : 'error-label'}
                                             style={{color: '#666666'}}
                                        >
                                            <span>Testing [{this.props.motivePower.scac}] and some more:&nbsp;
                                            {this.isValid(this.props.motivePower.scac) ? 'valid' : 'error'}</span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <Row className={this.isValid(this.props.motivePower.number) ? 'valid' : 'error-label'}>
                                <Col sm={4} md={4} lg={4}>
                                        <label>Road Number
                                            <Control.text
                                                    id='roadnumber_id'   
                                                    onChange={this.handleRoadNumberChange.bind(this)}
                                                    model=".number"
                                                    placeholder='Road Number'
                                                    validators={{
                                                        required: (val) => val.length
                                                    }}
                                            />
                                        </label>
                                </Col>
                                <Col sm={5} md={5} lg={5}>
                                        <span>Testing [{this.props.motivePower.number}] and some more:&nbsp;
                                        {this.isValid(this.props.motivePower) ? 'valid' : 'error'}</span>
                                </Col>
                            </Row>

                            <Row className={this.isValid(this.props.motivePower.decoder.dccAddress) ? 'valid' : 'error-label'}>
                                <Col sm={4} md={4} lg={4}>
                                    <label>DCC Address
                                        <Control.text
                                                id='dccaddress_id'
                                                onChange={this.handleDecoderAddressChange.bind(this)}
                                                model=".decoder.address"
                                                placeholder='DCC Address'
                                                validators={{
                                                    required: (val) => val
                                                }}
                                        />
                                    </label>
                                </Col>
                                <Col sm={5} md={5} lg={5}>
                                    <span>Testing [{this.props.motivePower.decoder.dccAddress}] and some more:&nbsp;
                                    {this.isValid(this.props.motivePower.decoder.dccAddress) ? 'valid' : 'error'}</span>
                                </Col>
                            </Row>

                            <Row className={this.isValid(this.props.motivePower.comment) ? 'valid' : 'error-label'}>
                                <Col sm={4} md={4} lg={4}>
                                    <label>Comment
                                        <Control.text
                                                id='comment_id'
                                                onChange={this.handleCommentChange.bind(this)}
                                                model=".comment"
                                                placeholder='Comment'/>
                                    </label>
                                </Col>
                                <Col sm={5} md={5} lg={5}>
                                    <span>Testing [{this.props.motivePower.comment}] and some more:&nbsp;
                                    {this.isValid(this.props.motivePower.comment) ? 'valid' : 'error'}</span>
                                </Col>
                            </Row>


                            <Row className={this.isValid(this.props.motivePower.unitType) ? 'valid' : 'error-label'}>
                                <Col sm={4} md={4} lg={4}>
                                    <label>Unit Type
                                        <Control.text
                                                id='unittype_id'
                                                onChange={this.handleUnitTypeChange.bind(this)}
                                                model=".unitType"
                                                placeholder='Unit Type'
                                        />
                                    </label>
                                </Col>
                                <Col sm={5} md={5} lg={5}>
                                    <span>Testing [{this.props.motivePower.unitType}] and some more:&nbsp;
                                    {this.isValid(this.props.motivePower.unitType) ? 'valid' : 'error'}</span>
                                </Col>
                            </Row>
                        </Grid>
                    </Card>

                    <div>
                        <Errors
                            model=".scac"
                            show={{pristine: false}}
                            component={(props) => <p className="error-msg">{props.children}</p>}
                            messages={{
                                validLdap: 'LDAP is invalid',
                                required: 'Locomotive road name is required',
                                maxLength: 'Road name must be less than 7 characters'
                            }}
                        />

                        <Errors
                            model=".number"
                            show={{pristine: false}}
                            component={(props) => <p className="error-msg">{props.children}</p>}
                            messages={{
                                validLdap: 'LDAP is invalid',
                                required: 'Locomotive number is required'
                            }}
                        />
                        <button type='button'
                                onClick={this.handleButtonClick.bind(this)}
                                id='reset'>
                            Reset to Default
                        </button>
                    </div>

                </Form>
            </div>
        );
    }
};



                        // <Row className={this.isValid(this.props.motivePower.kit.manufacturer) ? 'valid' : 'error-label'}>
                        //     <Col sm={4} md={4} lg={4}>
                        //         <label>Manufacturer
                        //             <Control.text
                        //                     id='manufacturer_id'
                        //                     onChange={this.handleManufacturerChange.bind(this)}
                        //                     model=".kit.manufacturer"
                        //                     placeholder='Manufacturer'
                        //             />
                        //         </label>
                        //     </Col>
                        //     <Col sm={5} md={5} lg={5}>
                        //         <span>Testing [{this.props.motivePower.kit.manufacturer}] and some more:
                        //         {this.isValid(this.props.motivePower.kit.manufacturer) ? 'valid' : 'error'}</span>
                        //     </Col>
                        // </Row>



                        // <Row className={this.isValid(this.props.forms.motivePower.) ? 'valid' : 'error-label'}>
                        //     <Col sm={4} md={4} lg={4}>
                        //     </Col>
                        //     <Col sm={5} md={5} lg={5}>
                        //         <span>Testing [{this.props.motivePower.id}] and some more:
                        //         {tthis.isValid(this.props.forms.motivePower.) ? 'valid' : 'error'}</span>
                        //     </Col>
                        // </Row>



                        // <Row className={this.props.forms.motivePower..valid ? 'valid' : 'error-label'}>
                        //     <Col sm={4} md={4} lg={4}>
                        //         <div className={this.props.forms.motivePower..valid ? 'valid' : 'error-label'}>
                        //         </div>
                        //     </Col>
                        //     <Col sm={5} md={5} lg={5}>
                        //         <div className={this.isValid(this.props.forms.motivePower.) ? 'valid visibility: hidden' : 'error-label'}
                        //              style={{color: '#666666'}}
                        //         >
                        //             <span>Testing [{this.props.motivePower.id}] and some more:
                        //             {this.props.forms.motivePower..valid ? 'valid' : 'error'}</span>
                        //         </div>
                        //     </Col>
                        // </Row>


                // <input type='submit' id='reset'>Reset to Default</input>

// export default MotivePower;

const mapStateToProps = (state) => ({
    motivePower: state.motivePower,
    forms: state.forms.motivePower
});

function mapDispatchToProps(dispatch) {
    return {
        actions:   bindActionCreators(motivePowerActions, dispatch),
        // fetchData: (id) => dispatch(id)
    }
}

// import { withRouter } from 'react-router-dom'
// export default withRouter(connect(mapStateToProps)(Something))

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MotivePower))


                        // <Errors
                        //     model=".decoder.address"
                        //     show={{pristine: false}}
                        //     wrapper={(props) => <div className="text-input-container error">{props.children}</div>}
                        //     component={(props) => <p className="error-msg">{props.children}</p>}
                        //     messages={{
                        //         validLdap: 'LDAP is invalid',
                        //         required: 'Decoder address is required'
                        //     }}
                        // />


                            // <Control.text
                            //     model="owner.ldapId"
                            //     id="owner.ldapId"
                            //     style={{
                            //         marginTop: '0px'
                            //     }}
                            //     validateOn="change"
                            //     asyncValidateOn="change"
                            //     asyncValidators={{
                            //          validLdap: (value, done) => {
                            //              let self = this;
                            //              const MINIMUM_VALID_LDAP_LENGTH = 5;
                            //              if(value.length >= MINIMUM_VALID_LDAP_LENGTH) {
                            //                  appActions.getUserName(value)
                            //                      .then((response) => {
                            //                      const SUCCESS_STATUS_CODE = 200;
                            //                      if (response.status === SUCCESS_STATUS_CODE) {
                            //                          let name = response.data.name;
                            //                          self.formThis.props.dispatchLdapFetchDataSuccess(name);
                            //                          done(true);
                            //                          self.formThis.props.clearModelValidation('owner.ldapId');
                            //                      } else {
                            //                          self.formThis.props.dispatchLdapFetchDataSuccess(globalConstants.emdash);
                            //                          done(false);
                            //                      }
                            //                  })
                            //                      .catch((err) => {
                            //                      self.formThis.props.dispatchLdapFetchDataSuccess(globalConstants.emdash);
                            //                      done(false);
                            //                      // This needs to be removed once this issue is solved
                            //                      // https://github.com/davidkpiano/react-redux-form/issues/1013
                            //                      self.formThis.props.clearRequiredSyncValidation('owner.ldapId');
                            //                  })
                            //              } else if (value.length === 0){
                            //                  self.formThis.props.dispatchLdapFetchDataSuccess(globalConstants.emdash);
                            //                  done(true);
                            //              } else {
                            //                  self.formThis.props.dispatchLdapFetchDataSuccess(globalConstants.emdash);
                            //                  done(false);
                            //              }
                            //          }
                            //      }}
                            //     validators={{
                            //         required: (val) => val.length
                            //     }}
                            // />


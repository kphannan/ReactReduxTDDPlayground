// @flow

// import React, { Component } from 'react'
import React from 'react'
// import type { Types } from 'react'

// import type { Reducer } from 'redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
// import {Link} from 'react-router-dom'

import { Form, Control, Errors } from 'react-redux-form'
import Card from '../../component/Card/card';
import Title from '../../component/Title/title';
import DescriptiveText from '../../component/DescriptiveText/descriptivetext';
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

        handlehandleFormReset     : Function
        handlehandleFormSave      : Function
        handleDecoderAddressChange: Function
        handleUnitIdChange        : Function
        handleRoadNameChange      : Function
        handleRoadNumberChange    : Function
        handleCommentChange       : Function
        handleUnitTypeChange      : Function
        handleManufacturerChange  : Function
        entryComponentClassName   : Function

    constructor( ...args: any ) {
        super( ...args )

        // console.log( this )
        this.handlehandleFormReset      = this.handleFormReset.bind(this)
        this.handlehandleFormSave       = this.handleFormSave.bind(this)
        // this.handleDecoderAddressChange = this.handleDecoderAddressChange.bind(this)
        this.handleUnitIdChange         = this.handleUnitIdChange.bind(this)
        this.handleRoadNameChange       = this.handleRoadNameChange.bind(this)
        this.handleRoadNumberChange     = this.handleRoadNumberChange.bind(this)
        this.handleCommentChange        = this.handleCommentChange.bind(this)
        this.handleUnitTypeChange       = this.handleUnitTypeChange.bind(this)
        this.handleManufacturerChange   = this.handleManufacturerChange.bind(this);
        this.entryComponentClassName    = this.entryComponentClassName.bind(this);
        // this.handleChange = this.handleChange.bind(this) 
    }

    handleFormReset( event: ReactOnClickEvent ) {

        this.props.actions.resetToDefaults();
    }

    handleFormSave( event: ReactOnClickEvent ) {

        console.log( 'handleFormSave called')
        // this.props.actions.resetToDefaults();
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

        console.log(element)
        return (element.pristine || element.valid);
        // return false;
    }

    entryComponentClassName( element: any ) {

        console.log(element)
        // return 'ext-input-container error-label';
        return this.isValid(element) ? 'text-input-container valid' : 'text-input-container error';
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


                    <Card>  {/*Roster Entry*/}
                        <Title tag='h3'>Unit ID [{this.props.motivePower.id}]</Title>
                        <Grid fluid>

                            <Row className='row-height'>
                                <Col sm={4} md={4} lg={4}>
                                    <div className={this.entryComponentClassName(this.props.forms.scac)}>
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
                                        
                                            <Errors
                                                model=".scac"
                                                show={{pristine: false}}
                                                component={(props) => <p className="error-msg" style={{'lineHeight': '19px'}}>{props.children}</p>}
                                                messages={{
                                                    required: "A road name is required.",
                                                    maxLength: "The road name must be less than 6 characters"
                                                }}
                                            />
                                            <DescriptiveText className="descriptivetext-override">Reporting mark of the railroad</DescriptiveText>
                                        </label>
                                    </div>
                                </Col>

                                <Col sm={4} md={4} lg={4}>
                                    <div className={this.entryComponentClassName(this.props.forms.number)}>

                                        <label>Road Number
                                            <Control.text
                                                    id='roadnumber_id'   
                                                    onChange={this.handleRoadNumberChange.bind(this)}
                                                    model=".number"
                                                    placeholder='Road Number'
                                                    validators={{
                                                        required: (val) => val.length,
                                                        maxLength: (val) => val.length <= 6
                                                    }}
                                            />
                                            <Errors
                                                model=".number"
                                                show={{pristine: false}}
                                                component={(props) => <p className="error-msg" style={{'lineHeight': '19px'}}>{props.children}</p>}
                                                messages={{
                                                    required: "A road number is required.",
                                                    maxLength: "A road number must be between 1 and 6 digits"
                                                }}
                                            />
                                            <DescriptiveText className="descriptivetext-override">Unique number for the locomotive</DescriptiveText>
                                        </label>
                                    </div>
                                </Col>
                            </Row>

                            <Row className='row-height'>
                                <Col sm={7} md={7} lg={7}>
                                    <div className={this.entryComponentClassName(this.props.forms.comment)}>
                                        <label>Comment
                                            <Control.textarea
                                                    id='comment_id'     
                                                    onChange={this.handleCommentChange.bind(this)}
                                                    model=".comment"
                                                    placeholder='Comment'
                                                    validators={{
                                                        maxLength: (val) => val.length <= 255
                                                    }}
                                            />                                        
                                            <Errors
                                                model=".comment"
                                                show={{pristine: false}}
                                                component={(props) => <p className="error-msg" style={{'lineHeight': '19px'}}>{props.children}</p>}
                                                messages={{
                                                    maxLength: "Comments are limited to 255 characters"
                                                }}
                                            />
                                            <DescriptiveText className="descriptivetext-override">Free-form text comment</DescriptiveText>
                                        </label>
                                    </div>
                                </Col>
                            </Row>

                        </Grid>
                    </Card>


                    <Card> {/*DCC Decoder*/}
                        {/*<Title tag='h2'>DCC Decoder</Title>*/}
                        <div class="card-toolbar">
                            <span class="card-title"><h2>DCC Decoder</h2></span>
                            <i class="icon_close"></i>
                        </div>
                        <Grid fluid>

                            <Row className='row-height'>
                                <Col sm={4} md={4} lg={4}>
                                    <div className={this.entryComponentClassName(this.props.forms.decoder.dccAddress)}>
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
                                            <Errors
                                                model=".decoder.address"
                                                show={{pristine: false}}
                                                component={(props) => <p className="error-msg" style={{'lineHeight': '19px'}}>{props.children}</p>}
                                                messages={{
                                                    required: "A decoder address is required."
                                                }}
                                            />
                                            <DescriptiveText className="descriptivetext-override">Free-form text comment</DescriptiveText>
                                        </label>
                                    </div>
                                </Col>
                            </Row>

                        </Grid>
                        {/*
                        <div class="card-actions right">
                            <a class="button">Save</a>
                            <a class="button primary">Continue</a>
                        </div>
                        */}
                    </Card>


                    <Card>  {/*Prototype Information*/}
                        <Title tag='h3'>Prototype Information</Title>
                        <Grid fluid>

                           <Row className='row-height'>
                                <Col sm={4} md={4} lg={4}>
                                    <div className={this.entryComponentClassName(this.props.forms.unitType)}>
                                        <label>Unit Type
                                            <Control.text
                                                    id='unittype_id'
                                                    onChange={this.handleUnitTypeChange.bind(this)}
                                                    model=".unitType"
                                                    placeholder='Unit Type'
                                                    validators={{
                                                        required: (val) => val
                                                    }}
                                            />
                                            <Errors
                                                model=".unitType"
                                                show={{pristine: false}}
                                                component={(props) => <p className="error-msg" style={{'lineHeight': '19px'}}>{props.children}</p>}
                                                messages={{
                                                    required: "A unit type address is required."
                                                }}
                                            />
                                            <DescriptiveText className="descriptivetext-override">Free-form text comment</DescriptiveText>
                                        </label>
                                    </div>
                                </Col>
                            </Row>

                            <Row className={this.isValid(this.props.motivePower.unitType) ? 'valid' : 'error-label'}>
                                <Col sm={4} md={4} lg={4}>
                                    <label>Unit Type
                                        <Control.text
                                                id='unittype_idx'
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

                        <div>
                        </div>
                    </Card>


                    <Card> {/*Model Information*/}

                        <Title tag='h3'>Model Details</Title>
                        <Grid fluid>

                            <Row className='row-height'>
                                <Col sm={4} md={4} lg={4}>
                                    <div className={this.entryComponentClassName(this.props.forms.kit.manufacturer)}>
                                        <Control.text
                                                id='kit_manufacturer_id'     
                                                onChange={this.handleManufacturerChange.bind(this)}
                                                model=".kit.manufacturer"
                                                placeholder='Manufacturer'
                                                validators={{
                                                    required: (val) => val.length,
                                                    maxLength: (val) => val.length <= 6
                                                }}
                                        />                                        
                                        <label>Manufacturer</label>
                                        <Errors
                                            model=".kit.manufacturer"
                                            show={{pristine: false}}
                                            component={(props) => <p className="error-msg" style={{'lineHeight': '19px'}}>{props.children}</p>}
                                            messages={{
                                                required: "A <> is required.",
                                                maxLength: "The <> must be less than 6 characters"
                                            }}
                                        />
                                        <DescriptiveText className="descriptivetext-override">Manufacturer of the model</DescriptiveText>
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                    </Card>


                    <div style={{justifyContent:'flex-end',display:'flex'}}>
                        <Link className='button secondary' onClick={this.handleFormReset.bind(this)} id='reset' to='#'>Reset to Default</Link>
                        <Link className='button primary'   onClick={this.handleFormSave.bind(this)} id='save' to='#'>Save</Link>
                    </div>

                </Form>
            </div>
        );
    }
};




                    // <Card>  {/*Roster Entry*/}
                    //     <Title tag='h3'>Roster Entry</Title>
                    //     <Grid fluid>

                    //         <Row className={this.isValid(this.props.motivePower.comment) ? 'valid' : 'error-label'}>
                    //             <Col sm={4} md={4} lg={4}>
                    //                 <label>Comment
                    //                     <Control.text
                    //                             id='comment_id'
                    //                             onChange={this.handleCommentChange.bind(this)}
                    //                             model=".comment"
                    //                             placeholder='Comment'/>
                    //                 </label>
                    //             </Col>
                    //             <Col sm={5} md={5} lg={5}>
                    //                 <span>Testing [{this.props.motivePower.comment}] and some more:&nbsp;
                    //                 {this.isValid(this.props.motivePower.comment) ? 'valid' : 'error'}</span>
                    //             </Col>
                    //         </Row>


                    //     </Grid>

                    // </Card>



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


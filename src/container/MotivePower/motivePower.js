// @flow

import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Form, Control, Errors, actions } from 'react-redux-form'


import { motivePowerActions } from '../../reducer/motivePower'



export class MotivePower extends Component {

    constructor( ...args ) {
        super( ...args )

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

    handleButtonClick( event ) {
        // console.log( 'Got a click')
        // console.log( event )
        this.props.actions.resetToDefaults();
    }

    handleDecoderAddressChange(event) {
        // console.log( 'handleDecoderAddressChange')
        // console.log( event )
        this.props.actions.changeDecoderAddress( event.target.value );
    }


    handleUnitIdChange(event) {
        // console.log( 'handleUnitIdChange')
        // console.log( event )
        // console.log( event.target )
        // this.setState({
        //  id: event.target.value
        // })
        this.props.actions.changeUnitId( event.target.value );
    }

    handleRoadNameChange(event) {

        this.props.actions.changeRoadName( event.target.value, this.props.motivePower.number );
    }

    handleRoadNumberChange(event) {

        this.props.actions.changeRoadNumber( this.props.motivePower.scac, event.target.value );
    }

    handleCommentChange(event) {

        this.props.actions.changeComment( event.target.value );
    }

    handleUnitTypeChange(event) {

        this.props.actions.changeUnitType( event.target.value );
    }

    handleManufacturerChange(event) {

        this.props.actions.changeManufacturer( event.target.value );
    }




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


    render() {
        // console.log( this.props );
        // console.log( this.props.motivePower );
        // console.log( this.props.motivePower.decoder.address );

        return (
            <Form model="motivePower" autoComplete="off">
            <div>
                <label>Unit ID
                    <input  type='text'   
                            id='unit_id'
                            onChange={this.handleUnitIdChange.bind(this)}
                            value={this.props.motivePower.id}
                            placeholder='Unit ID'
                    />
                </label>
                <br />
                <label>Road Name
                    <Control.text
                            id='roadname_id'     
                            onChange={this.handleRoadNameChange.bind(this)}
                            model=".scac"
                            placeholder='Road Name'
                            validators={{
                                required: (val) => val.length
                            }}
                    />
                </label>
                <br />
                <label>Road Number
                    <Control.text
                            id='roadnumber_id'   
                            onChange={this.handleRoadNumberChange.bind(this)}
                            value={this.props.motivePower.number}
                            model=".number"
                            placeholder='Road Number'
                            validators={{
                                required: (val) => val.length
                            }}
                    />
                </label>
                <br />
                
                <label>Unit Type
                    <Control.text
                            id='unittype_id'
                            onChange={this.handleUnitTypeChange.bind(this)}
                            model=".unitType"
                            placeholder='Unit Type'
                    />
                </label>
                <br />
                <label>Manufacturer
                    <Control.text
                            id='manufacturer_id'
                            onChange={this.handleManufacturerChange.bind(this)}
                            model=".model.manufacturer"
                            placeholder='Manufacturer'
                    />
                </label>
                <br />

                <label>DCC Address
                    <Control.text
                            id='dccaddress_id'
                            onChange={this.handleDecoderAddressChange.bind(this)}
                            model=".decoder.address"
                            placeholder='DCC Address'
                            validators={{
                                required: (val) => val.length
                            }}
                    />
                </label>
                <br />

                <label>Comment
                    <Control.text
                            id='comment_id'
                            onChange={this.handleCommentChange.bind(this)}
                            model=".comment"
                            placeholder='Comment'/>
                </label>
                <br />

                <button type='button'
                        onClick={this.handleButtonClick.bind(this)}
                        id='reset'>
                    Reset to Default
                </button>


                <Errors
                    model=".scac"
                    show={{pristine: false}}
                    wrapper={(props) => <div className="text-input-container error">{props.children}</div>}
                    component={(props) => <p className="error-msg">{props.children}</p>}
                    messages={{
                        validLdap: 'LDAP is invalid',
                        required: 'Locomotive road name is required'
                    }}
                />
                <Errors
                    model=".number"
                    show={{pristine: false}}
                    wrapper={(props) => <div className="text-input-container error">{props.children}</div>}
                    component={(props) => <p className="error-msg">{props.children}</p>}
                    messages={{
                        validLdap: 'LDAP is invalid',
                        required: 'Locomotive number is required'
                    }}
                />
                <Errors
                    model=".decoder.address"
                    show={{pristine: false}}
                    wrapper={(props) => <div className="text-input-container error">{props.children}</div>}
                    component={(props) => <p className="error-msg">{props.children}</p>}
                    messages={{
                        validLdap: 'LDAP is invalid',
                        required: 'Decoder address is required'
                    }}
                />
            </div>
            </Form>
        );
    }
};


                // <input type='submit' id='reset'>Reset to Default</input>

// export default MotivePower;

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        actions:   bindActionCreators(motivePowerActions, dispatch),
        // fetchData: (id) => dispatch(id)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MotivePower)
// export default connect(mapStateToProps)(MotivePower)



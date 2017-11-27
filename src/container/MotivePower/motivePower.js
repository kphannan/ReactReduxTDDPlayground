// @flow

import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
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

        this.props.actions.changeRoadNumber( event.target.value, this.props.motivePower.number );
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

    // handleDecoderAddressChange(event) {
    //  this.props.actions.changeDecoderAddress( event.target.value, this.props.motivePower );
    // }






    render() {
        // console.log( this.props );
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
                <label>Road Name
                    <input  type='text'   
                            id='roadname_id'     
                            onChange={this.handleRoadNameChange.bind(this)}
                            value={this.props.motivePower.scac}
                            placeholder='Road Name'
                    />
                </label>
                <label>Road Number
                    <input  type='text'   
                            id='roadnumber_id'   
                            onChange={this.handleRoadNumberChange.bind(this)}
                            value={this.props.motivePower.number}
                            placeholder='Road Number'
                    />
                </label>
                <label>Unit Type
                    <input  type='text'   
                            id='unittype_id'
                            onChange={this.handleUnitTypeChange.bind(this)}
                            value={this.props.motivePower.unitType}
                            placeholder='Unit Type'
                    />
                </label>
                <label>Manufacturer
                    <input  type='text'   
                            id='manufacturer_id'
                            onChange={this.handleManufacturerChange.bind(this)}
                            value={this.props.motivePower.model.manufacturer}
                            placeholder='Manufacturer'
                    />
                </label>

                <label>DCC Address
                    <input  type='text'
                            id='dccaddress_id'
                            onChange={this.handleDecoderAddressChange.bind(this)}
                            value={this.props.motivePower.decoder.address}
                            placeholder='DCC Address'/>
                </label>

                <label>Comment
                    <input  type='text'
                            id='comment_id'
                            onChange={this.handleCommentChange.bind(this)}
                            value={this.props.motivePower.comment}
                            placeholder='Comment'/>
                </label>

                <button type='button'
                        onClick={this.handleButtonClick.bind(this)}
                        id='reset'>
                    Reset to Default
                </button>
            </div>
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



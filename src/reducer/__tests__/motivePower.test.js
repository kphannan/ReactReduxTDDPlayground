
import reducer, { motivePowerActions } from '../motivePower'



const defaultState = {
    id: "",
    scac:  "",
    number:  "",
    unitType:  "",
    comment:  "",
    kit: {
        manufacturer: "",
    },
    decoder: {
        dccAddress:  "",
        family:  "",
        model:  "",
        comment:  "",
        filename:  "",
    },
};


describe( 'MotivePower reducer defaults', () => {

    it( 'Should return an complete state with all properties blank when passed an undefined state', () => {
    	var state = reducer( undefined, undefined );

    	expect( state ).not.toBeUndefined();
    	expect( state ).not.toBeNull();

        expect( state ).toHaveProperty( 'id')
        expect( state ).toHaveProperty( 'scac')
        expect( state ).toHaveProperty( 'number')
        expect( state ).toHaveProperty( 'unitType')
        expect( state ).toHaveProperty( 'comment')
        expect( state ).toHaveProperty( 'kit')
        expect( state ).toHaveProperty( 'kit.manufacturer')
        expect( state ).toHaveProperty( 'decoder')
        expect( state ).toHaveProperty( 'decoder.dccAddress')
        expect( state ).toHaveProperty( 'decoder.family')
        expect( state ).toHaveProperty( 'decoder.model')
        expect( state ).toHaveProperty( 'decoder.comment')
        expect( state ).toHaveProperty( 'decoder.filename')

    	expect( state ).toEqual( defaultState );
    });


	it( 'Should return the same state on an undefined action', () => {
		const initialState = { motivePower: {id: "abc 123", number: "123" }};
		var state = reducer( initialState, undefined );

    	expect( state ).not.toBeUndefined();
		expect( state ).not.toBeNull();
		expect( state ).toEqual( initialState );
	});

	it( 'Should return the same state on an unrelated action', () => {
		const initialState = { motivePower: {id: "abc 123", number: "123" }};
		var state = reducer( initialState, {type: 'FOO'} );

    	expect( state ).not.toBeUndefined();
		expect( state ).not.toBeNull();
		expect( state ).toEqual( initialState );
	});

});



describe( 'Action creators', () => {
	// var reducer

    // beforeEach( () => {
    //     wrapper = shallow(<MotivePower />)
    // });
    // 

    it( 'Should create action: resetToDefault', () => {

        expect( motivePowerActions.resetToDefaults())
              .toEqual( {type: 'MOTIVE_POWER_STATE_RESET_TO_DEFAULTS',
                         payload: defaultState
                        }
                      );

    });

    it( 'changeRoadName', () => {
        expect( motivePowerActions.noop())
              .toEqual( {type: 'MOTIVE_POWER_NOOP' });
    });

    it( 'changeRoadName', () => {
        expect( motivePowerActions.changeRoadName('EL', 9999 ))
              .toEqual( {type: 'MOTIVE_POWER_ROAD_NAME_CHANGE',
                         payload: {
                            scac: 'EL',
                            id: 'EL 9999' 
                         }
                        });
    });

    it( 'changeRoadNumber', () => {
        expect( motivePowerActions.changeRoadNumber('xx', 1234 ))
              .toMatchObject( {type: 'MOTIVE_POWER_ROAD_NUMBER_CHANGE',
                               payload: {
                                  number: 1234,
                                  id: 'xx 1234' 
                               }
                        });
    });

    it( 'changeCommment', () => {
        expect( motivePowerActions.changeComment('Kilroy was here' ))
              .toMatchObject( {type: 'MOTIVE_POWER_COMMENT_CHANGE',
                               payload: {
                                  comment: 'Kilroy was here'
                               }
                        });
    });

    it( 'changeUnitType', () => {
        expect( motivePowerActions.changeUnitType('Revel' ))
              .toMatchObject( {type: 'MOTIVE_POWER_UNIT_TYPE_CHANGE',
                               payload: {
                                  unitType: 'Revel'
                               }
                        });
    });

    it( 'changeManufacturer', () => {
        expect( motivePowerActions.changeManufacturer('Kato' ))
              .toMatchObject( {type: 'MOTIVE_POWER_MANUFACTURER_CHANGE',
                               payload: {
                                  manufacturer: 'Kato'
                               }
                        });
    });

    it( 'changeDecoderAddress', () => {
        expect( motivePowerActions.changeDecoderAddress('BEEF' ))
              .toMatchObject( {type: 'MOTIVE_POWER_DECODER_ADDRESS_CHANGE',
                               payload: {
                                  dccAddress: 'BEEF'
                               }
                        });
    });

    // it( 'Should create action: ', () => {

    // });

});




describe( 'Reducer', () => {

    it( 'Should return a state with all items blank', () => {

        const state = reducer( {id: '1234', scac: 'abcd'}, motivePowerActions.resetToDefaults() );

        expect( state ).not.toBeNull();

        expect( state ).toHaveProperty( 'id', '' )
        expect( state ).toHaveProperty( 'scac', '' )
        expect( state ).toHaveProperty( 'number', "" )
        expect( state ).toHaveProperty( 'unitType', '' )
        expect( state ).toHaveProperty( 'comment', '' )
        expect( state ).toHaveProperty( 'kit')
        expect( state ).toHaveProperty( 'kit.manufacturer', '' )
        expect( state ).toHaveProperty( 'decoder' )
        expect( state ).toHaveProperty( 'decoder.dccAddress', '' )
        expect( state ).toHaveProperty( 'decoder.family', '' )
        expect( state ).toHaveProperty( 'decoder.model', '' )
        expect( state ).toHaveProperty( 'decoder.comment', '' )
        expect( state ).toHaveProperty( 'decoder.filename', '' )

        expect( state ).toEqual( defaultState );
    });


    it( 'Should return a new state with the updated road name and id', () => {

        var state = {id: '1234', scac: 'abcd', number: 5680 };
        var state = reducer( state
                            ,motivePowerActions.changeRoadName( 'EL', state.number ) );

        expect( state ).toHaveProperty( 'scac', 'EL' )
        expect( state ).toHaveProperty( 'number', 5680 )
        expect( state ).toHaveProperty( 'id', 'EL 5680' )
    })

    it( 'Should return a new state with the updated road number and id', () => {

        var state = {id: '1234', scac: 'abcd', number: 5680 };
        var state = reducer( state
                            ,motivePowerActions.changeRoadNumber( state.scac, 9876 ) );

        expect( state ).toHaveProperty( 'scac', 'abcd' )
        expect( state ).toHaveProperty( 'number', 9876 )
        expect( state ).toHaveProperty( 'id', 'abcd 9876' )
    })

    it( 'Should return a new state with the updated comment', () => {

        var state = {id: '1234', scac: 'abcd', number: 5680 };
        var state = reducer( state
                            ,motivePowerActions.changeComment( "This is a test", state ));

        expect( state ).toHaveProperty( 'comment', "This is a test")
        expect( state ).toHaveProperty( 'scac', 'abcd' )
        expect( state ).toHaveProperty( 'number', 5680 )
        expect( state ).toHaveProperty( 'id', '1234' )
    })



    it( 'Should return a new state with the model manufacturer', () => {

        var state = {id: '1234', scac: 'abcd', number: 5680 };
        var state = reducer( state
                            ,motivePowerActions.changeManufacturer( "Proto 2000", state ));

        expect( state ).toHaveProperty( 'model.manufacturer', 'Proto 2000')
        expect( state ).toHaveProperty( 'scac', 'abcd' )
        expect( state ).toHaveProperty( 'number', 5680 )
        expect( state ).toHaveProperty( 'id', '1234' )
    })



    it( 'Should return a new state with the updated unit type', () => {

        var state = {id: '1234', scac: 'abcd', number: 5680 };
        var state = reducer( state
                            ,motivePowerActions.changeUnitType( "SDP40", state ));

        expect( state ).toHaveProperty( 'unitType', 'SDP40')
        // expect( state ).toHaveProperty( 'scac', 'abcd' )
        // expect( state ).toHaveProperty( 'number', 5680 )
        // expect( state ).toHaveProperty( 'id', '1234' )
    })


    it( 'Should return a new state with the updated DCC address', () => {

        var state = {id: '1234', scac: 'abcd', number: 5680 };
        var state = reducer( state
                            ,motivePowerActions.changeDecoderAddress( "5544", state ));

        expect( state ).toHaveProperty( 'decoder.dccAddress', '5544')
        expect( state ).toHaveProperty( 'scac', 'abcd' )
        expect( state ).toHaveProperty( 'number', 5680 )
        expect( state ).toHaveProperty( 'id', '1234' )
    })



});


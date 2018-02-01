
import reducer, { rosterListActions } from './rosterList'



const defaultState = [{
    id: "el 7777",
    scac:  "EL",
    number:  "7777",
    unitType:  "GP35",
    comment:  "",
    kit: {
        manufacturer: "Kato",
    },
    decoder: {
        dccAddress:  "8888",
        family:  "",
        model:  "DH-142",
        comment:  "",
        filename:  "",
    },
}];


describe( 'RosterList reducer defaults', () => {

    it( 'Should return an complete state with all properties blank when passed an undefined state', () => {
    	var state = reducer( undefined, undefined );

    	expect( state ).not.toBeUndefined();
    	expect( state ).not.toBeNull();

        expect( state[0] ).toHaveProperty( 'id')
        expect( state[0] ).toHaveProperty( 'scac')
        expect( state[0] ).toHaveProperty( 'number')
        expect( state[0] ).toHaveProperty( 'unitType')
        expect( state[0] ).toHaveProperty( 'comment')
        expect( state[0] ).toHaveProperty( 'kit')
        expect( state[0] ).toHaveProperty( 'kit.manufacturer')
        expect( state[0] ).toHaveProperty( 'decoder')
        expect( state[0] ).toHaveProperty( 'decoder.dccAddress')
        expect( state[0] ).toHaveProperty( 'decoder.family')
        expect( state[0] ).toHaveProperty( 'decoder.model')
        expect( state[0] ).toHaveProperty( 'decoder.comment')
        expect( state[0] ).toHaveProperty( 'decoder.filename')

    	expect( state ).toEqual( defaultState );
    });


	it( 'Should return the same state on an undefined action', () => {
		const initialState = { rosterList: {id: "abc 123", number: "123" }};
		var state = reducer( initialState, undefined );

    	expect( state ).not.toBeUndefined();
		expect( state ).not.toBeNull();
		expect( state ).toEqual( initialState );
	});

	it( 'Should return the same state on an unrelated action', () => {
		const initialState = { rosterList: {id: "abc 123", number: "123" }};
		var state = reducer( initialState, {type: 'FOO'} );

    	expect( state ).not.toBeUndefined();
		expect( state ).not.toBeNull();
		expect( state ).toEqual( initialState );
	});

});



describe( 'Action creators', () => {
	// var reducer

    // beforeEach( () => {
    //     wrapper = shallow(<rosterList />)
    // });
    //

    // it( 'Should create action: resetToDefault', () => {
    //     expect( rosterListActions.resetToDefaults())
    //           .toEqual( {type: 'MOTIVE_POWER_STATE_RESET_TO_DEFAULTS',
    //                      payload: defaultState
    //                     }
    //                   );
    // });

    it( 'A NOOP will not change the current state', () => {
        expect( rosterListActions.noop())
              .toEqual( {type: 'ROSTER_LIST_NOOP' });
    });
    // it( 'changeRoadName', () => {
    // });

    // it( 'changeRoadName', () => {
    //     expect( rosterListActions.changeRoadName('EL', 9999 ))
    //           .toEqual( {type: 'MOTIVE_POWER_ROAD_NAME_CHANGE',
    //                      payload: {
    //                         scac: 'EL',
    //                         id: 'EL 9999'
    //                      }
    //                     });
    // });


    // it( 'changeCommment', () => {
    //     expect( rosterListActions.changeComment('Kilroy was here' ))
    //           .toMatchObject( {type: 'MOTIVE_POWER_COMMENT_CHANGE',
    //                            payload: {
    //                               comment: 'Kilroy was here'
    //                            }
    //                     });
    // });

    // it( 'changeUnitType', () => {
    //     expect( rosterListActions.changeUnitType('Revel' ))
    //           .toMatchObject( {type: 'MOTIVE_POWER_UNIT_TYPE_CHANGE',
    //                            payload: {
    //                               unitType: 'Revel'
    //                            }
    //                     });
    // });

    // it( 'changeManufacturer', () => {
    //     expect( rosterListActions.changeManufacturer('Kato' ))
    //           .toMatchObject( {type: 'MOTIVE_POWER_MANUFACTURER_CHANGE',
    //                            payload: {
    //                               manufacturer: 'Kato'
    //                            }
    //                     });
    // });

    // it( 'changeDecoderAddress', () => {
    //     expect( rosterListActions.changeDecoderAddress('BEEF' ))
    //           .toMatchObject( {type: 'MOTIVE_POWER_DECODER_ADDRESS_CHANGE',
    //                            payload: {
    //                               dccAddress: 'BEEF'
    //                            }
    //                     });
    // });

    // it( 'Should create action: ', () => {

    // });

});




describe( 'Reducer', () => {

    // it( 'Should return a state with all items blank', () => {

    //     const state = reducer( {id: '1234', scac: 'abcd'}, rosterListActions.resetToDefaults() );

    //     expect( state ).not.toBeNull();

    //     expect( state ).toHaveProperty( 'id', '' )
    //     expect( state ).toHaveProperty( 'scac', '' )
    //     expect( state ).toHaveProperty( 'number', "" )
    //     expect( state ).toHaveProperty( 'unitType', '' )
    //     expect( state ).toHaveProperty( 'comment', '' )
    //     expect( state ).toHaveProperty( 'kit')
    //     expect( state ).toHaveProperty( 'kit.manufacturer', '' )
    //     expect( state ).toHaveProperty( 'decoder' )
    //     expect( state ).toHaveProperty( 'decoder.dccAddress', '' )
    //     expect( state ).toHaveProperty( 'decoder.family', '' )
    //     expect( state ).toHaveProperty( 'decoder.model', '' )
    //     expect( state ).toHaveProperty( 'decoder.comment', '' )
    //     expect( state ).toHaveProperty( 'decoder.filename', '' )

    //     expect( state ).toEqual( defaultState );
    // });


    it( 'Should return a new state with the updated road name and id', () => {

        var state = [{id: '1234', scac: 'abcd', number: 5680 }];
        var state = reducer( state
                            ,rosterListActions.noop() );

        expect( state[0] ).toHaveProperty( 'scac', 'abcd' )
        expect( state[0] ).toHaveProperty( 'number', 5680 )
        expect( state[0] ).toHaveProperty( 'id', '1234' )
    })


    // it( 'Should return a new state with the updated road name and id', () => {

    //     var state = {id: '1234', scac: 'abcd', number: 5680 };
    //     var state = reducer( state
    //                         ,rosterListActions.changeRoadName( 'EL', state.number ) );

    //     expect( state ).toHaveProperty( 'scac', 'EL' )
    //     expect( state ).toHaveProperty( 'number', 5680 )
    //     expect( state ).toHaveProperty( 'id', 'EL 5680' )
    // })




    // it( 'Should return a new state with the updated unit type', () => {

    //     var state = {id: '1234', scac: 'abcd', number: 5680 };
    //     var state = reducer( state
    //                         ,rosterListActions.changeUnitType( "SDP40", state ));

    //     expect( state ).toHaveProperty( 'unitType', 'SDP40')
    //     // expect( state ).toHaveProperty( 'scac', 'abcd' )
    //     // expect( state ).toHaveProperty( 'number', 5680 )
    //     // expect( state ).toHaveProperty( 'id', '1234' )
    // })


    // it( 'Should return a new state with the updated DCC address', () => {

    //     var state = {id: '1234', scac: 'abcd', number: 5680 };
    //     var state = reducer( state
    //                         ,rosterListActions.changeDecoderAddress( "5544", state ));

    //     expect( state ).toHaveProperty( 'decoder.dccAddress', '5544')
    //     expect( state ).toHaveProperty( 'scac', 'abcd' )
    //     expect( state ).toHaveProperty( 'number', 5680 )
    //     expect( state ).toHaveProperty( 'id', '1234' )
    // })



});


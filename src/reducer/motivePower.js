// @flow

type FlowAction = {
    type: string,
    error: ?boolean,
    payload?: ?{
        id?: ?string,
        scac: ?string,
        number: ?number,
        manufacturer: ?string,
        dccAddress: ?string,
        comment: ?string,
        unitType: ?string
    },
    meta: ?any
};

export type MotivePowerState = {
    id: string,
    scac:  string,
    number:  number,
    unitType:  string,
    comment:  string,
    model: {
        manufacturer: string,
    },
    decoder: {
        dccAddress:  string,
        family:  string,
        model:  string,
        comment:  string,
        filename:  string
    }
};

var defaultState: MotivePowerState = {
    id: "",
    scac:  "",
    number:  0,
    unitType:  "",
    comment:  "",
    model: {
        manufacturer: "",
    },
    decoder: {
        address:  "",
        family:  "",
        model:  "",
        comment:  "",
        filename:  ""
    }
};

// Use redux-actions
// action name: <NOUN>_<VERB>
// action creator name: <verb><Noun>
// selector name: get<Noun>



// ============================================================================
// ============================================================================
// ----- Action Creators -----
export const motivePowerActions = {

    noop: () =>  ({ type: 'MOTIVE_POWER_NOOP' }),

    resetToDefaults: () => ({
        type: 'MOTIVE_POWER_STATE_RESET_TO_DEFAULTS',
        payload: defaultState
    }),

    changeComment: (comment: string) => ({
        type: 'MOTIVE_POWER_COMMENT_CHANGE',
        payload: {
            comment: comment
        }
    }),

    changeUnitType: (unitType: string) => ({
        type: 'MOTIVE_POWER_UNIT_TYPE_CHANGE',
        payload: {
            unitType: unitType
        }
    }),

    changeDecoderAddress: (dccAddress: string) => ({
        type: 'MOTIVE_POWER_DECODER_ADDRESS_CHANGE',
        payload: {
            dccAddress: dccAddress
        }
    }),

    changeManufacturer: (manufacturer: string) => ({
        type: 'MOTIVE_POWER_MANUFACTURER_CHANGE',
        payload: {
            manufacturer: manufacturer
        }
    }),

    changeRoadName: (scac: string, number: number) => ({
        type: 'MOTIVE_POWER_ROAD_NAME_CHANGE',
        payload: {
            scac: scac,
            id: `${scac} ${number}`
        }
    }),

    changeRoadNumber: (scac: string, number: number) => ({
        type: 'MOTIVE_POWER_ROAD_NUMBER_CHANGE',
        payload: {
            number: number,
            id: `${scac} ${number}`
        }
    }),
};


// ============================================================================
// ============================================================================
// ----- Reducer -----
const motivePower = (state: MotivePowerState = defaultState, action: FlowAction = {type: 'NOOP'} ) => {

    switch ( action.type ) {

        case 'NOOP':
            return state;
            
        case 'MOTIVE_POWER_STATE_RESET_TO_DEFAULTS':
            return { ...defaultState };

        case 'MOTIVE_POWER_DECODER_ADDRESS_CHANGE':
            return Object.assign( {}, state
                                 ,{decoder: action.payload });
                                 // ,{decoder: {address: action.payload.dccAddress }});

        case 'MOTIVE_POWER_UNIT_TYPE_CHANGE':
            return Object.assign( {}, state
                                 ,{unitType: action.payload.unitType });

        case 'MOTIVE_POWER_COMMENT_CHANGE':
            return Object.assign( {}, state
                                 ,{comment: action.payload.comment });

        case 'MOTIVE_POWER_MANUFACTURER_CHANGE':
            return Object.assign( {}, state
                                 ,{model: action.payload });
                                 // ,{model: {manufacturer: action.payload.manufacturer }});

        case 'MOTIVE_POWER_ROAD_NUMBER_CHANGE':
            return Object.assign( {}, state, action.payload );
            // return Object.assign( {}, state, {number: action.payload.roadNumber, id:  action.payload.id});

        case 'MOTIVE_POWER_ROAD_NAME_CHANGE':
            return Object.assign({}, state, action.payload );
            // return Object.assign({}, state, {scac: action.payload.roadName, id:  action.payload.id});

        default:        
            return state;
    }
}

export default motivePower;
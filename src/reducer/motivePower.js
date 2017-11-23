


const defaultState = {
    id: "",
    scac:  "",
    number:  "",
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
        filename:  "",
    },
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

    changeComment: (comment) => ({
        type: 'MOTIVE_POWER_COMMENT_CHANGE',
        payload: {
            comment: comment
        }
    }),

    changeUnitType: (unitType) => ({
        type: 'MOTIVE_POWER_UNIT_TYPE_CHANGE',
        payload: {
            unitType: unitType
        }
    }),

    changeDecoderAddress: (dccAddress) => ({
        type: 'MOTIVE_POWER_DECODER_ADDRESS_CHANGE',
        payload: {
            dccAddress: dccAddress
        }
    }),

    changeManufacturer: (manufacturer) => ({
        type: 'MOTIVE_POWER_MANUFACTURER_CHANGE',
        payload: {
            manufacturer: manufacturer
        }
    }),

    changeRoadName: (scac, number) => ({
        type: 'MOTIVE_POWER_ROAD_NAME_CHANGE',
        payload: {
            roadName: scac,
            id: `${scac} ${number}`
        }
    }),

    changeRoadNumber: (scac, number) => ({
        type: 'MOTIVE_POWER_ROAD_NUMBER_CHANGE',
        payload: {
            roadNumber: number,
            id: `${scac} ${number}`
        }
    }),
};


// ============================================================================
// ============================================================================
// ----- Reducer -----
const motivePower = (state = defaultState, action = {type: 'NOOP'} ) => {

    switch ( action.type ) {

        case 'NOOP':
            return state;
            
        case 'MOTIVE_POWER_STATE_RESET_TO_DEFAULTS':
            return { ...defaultState };

        case 'MOTIVE_POWER_DECODER_ADDRESS_CHANGE':
            return Object.assign( {}, state
                                 ,{decoder: {address: action.payload.dccAddress }});

        case 'MOTIVE_POWER_UNIT_TYPE_CHANGE':
            return Object.assign( {}, state
                                 ,{unitType: action.payload.unitType });

        case 'MOTIVE_POWER_COMMENT_CHANGE':
            return Object.assign( {}, state
                                 ,{comment: action.payload.comment });

        case 'MOTIVE_POWER_MANUFACTURER_CHANGE':
            return Object.assign( {}, state
                                 ,{model: {manufacturer: action.payload.manufacturer }});

        case 'MOTIVE_POWER_ROAD_NUMBER_CHANGE':
            return Object.assign( {}, state, {number: action.payload.roadNumber, id:  action.payload.id});

        case 'MOTIVE_POWER_ROAD_NAME_CHANGE':
            return Object.assign({}, state, {scac: action.payload.roadName, id:  action.payload.id});

        default:        
            return state;
    }
}

export default motivePower;
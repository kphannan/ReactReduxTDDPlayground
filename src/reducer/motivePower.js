// @flow


// ----- Define the shape and associated datatypes for the Motive Power state
export type MotivePowerState = {
    id: string,
    scac:  string,
    number:  string,
    unitType:  string,
    comment:  string,
    kit: {
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
        filename:  ""
    }
};


type NoopAction = {

    type: 'MOTIVE_POWER_NOOP'
}

type ResetToDefaultsAction = {
    type: 'MOTIVE_POWER_STATE_RESET_TO_DEFAULTS',
    payload: MotivePowerState
}

type ChangeCommentAction = {
    type: 'MOTIVE_POWER_COMMENT_CHANGE',
    payload: {
        comment: string
    }    
}

type ChangeUnitTypeAction = {
    type: 'MOTIVE_POWER_UNIT_TYPE_CHANGE',
    payload: {
        unitType: string
    }
}

type ChangeDecoderAddressAction = {
    type: 'MOTIVE_POWER_DECODER_ADDRESS_CHANGE',
    payload: {
        dccAddress: string
    }
}

type ChangeManufacturerAction = {
    type: 'MOTIVE_POWER_MANUFACTURER_CHANGE',
    payload: {
        manufacturer: string
    }
}

type ChangeRoadNameAction = {
    type: 'MOTIVE_POWER_ROAD_NAME_CHANGE',
    payload: {
        scac: string,
        id: string
    }
}

type ChangeRoadNumberAction = {
    type: 'MOTIVE_POWER_ROAD_NUMBER_CHANGE',
    payload: {
        number: number,
        id: string
    }
}

// type FlowAction =
type MotivePowerAction =
    | NoopAction
    | ResetToDefaultsAction
    | ChangeCommentAction
    | ChangeUnitTypeAction
    | ChangeDecoderAddressAction
    | ChangeRoadNameAction
    | ChangeRoadNumberAction
    | ChangeManufacturerAction
    |
{
    type: string,
    error?: ?boolean,
    payload: any,
    // payload?: ?{
        // id?: ?string,
        // scac: ?string,
        // number: ?number,
        // manufacturer: ?string,
        // dccAddress: ?string,
        // comment: ?string,
        // unitType: ?string
    // },
    meta?: ?any
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

    resetToDefaults: (): ResetToDefaultsAction => ({
        type: 'MOTIVE_POWER_STATE_RESET_TO_DEFAULTS',
        payload: defaultState
    }),

    changeComment: (comment: string): ChangeCommentAction => ({
        type: 'MOTIVE_POWER_COMMENT_CHANGE',
        payload: {
            comment: comment
        }
    }),

    changeUnitType: (unitType: string): ChangeUnitTypeAction => ({
        type: 'MOTIVE_POWER_UNIT_TYPE_CHANGE',
        payload: {
            unitType: unitType
        }
    }),

    changeDecoderAddress: (dccAddress: string): ChangeDecoderAddressAction => ({
        type: 'MOTIVE_POWER_DECODER_ADDRESS_CHANGE',
        payload: {
            dccAddress: dccAddress
        }
    }),

    changeManufacturer: (manufacturer: string): ChangeManufacturerAction => ({
        type: 'MOTIVE_POWER_MANUFACTURER_CHANGE',
        payload: {
            manufacturer: manufacturer
        }
    }),

    changeRoadName: (scac: string, number: number): ChangeRoadNameAction => ({
        type: 'MOTIVE_POWER_ROAD_NAME_CHANGE',
        payload: {
            scac: scac,
            id: `${scac} ${number}`
        }
    }),

    changeRoadNumber: (scac: string, number: number): ChangeRoadNumberAction => ({
        type: 'MOTIVE_POWER_ROAD_NUMBER_CHANGE',
        payload: {
            number: number,
            id: `${scac} ${number}`
        }
    }),
};

const NOOP_ACTION: NoopAction = { type: 'MOTIVE_POWER_NOOP' };

// ============================================================================
// ============================================================================
// ----- Reducer -----
// const motivePower = (state: MotivePowerState = defaultState, action: FlowAction = NOOP_ACTION ) => {
const motivePower = (state: MotivePowerState = defaultState, action: MotivePowerAction = NOOP_ACTION ) => {

    switch ( action.type ) {

        case NOOP_ACTION.type :
            return state;
            
        case 'MOTIVE_POWER_STATE_RESET_TO_DEFAULTS':
            return { ...defaultState };

        case 'MOTIVE_POWER_DECODER_ADDRESS_CHANGE':
            return {...state, decoder: action.payload };
            // return Object.assign( {}, state
            //                      ,{decoder: action.payload });

        case 'MOTIVE_POWER_UNIT_TYPE_CHANGE':
            return {...state, unitType: action.payload.unitType };

        case 'MOTIVE_POWER_COMMENT_CHANGE':
            return {...state, comment: action.payload.comment };

        case 'MOTIVE_POWER_MANUFACTURER_CHANGE':
            return {...state, model: action.payload };

        case 'MOTIVE_POWER_ROAD_NUMBER_CHANGE':
            return{...state, number: action.payload.number, id: action.payload.id };
            // return Object.assign( {}, state, action.payload );

        case 'MOTIVE_POWER_ROAD_NAME_CHANGE':
            return{...state, scac: action.payload.scac, id: action.payload.id };
            // return Object.assign({}, state, action.payload );

        default:        
            return state;
    }
}

export default motivePower;
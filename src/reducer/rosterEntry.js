// @flow


// ----- Define the shape and associated datatypes for the Motive Power state
export type RosterEntryState = {
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

var defaultState: RosterEntryState = {
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

    type: 'ROSTER_ENTRY_NOOP'
}

// type ResetToDefaultsAction = {
//     type: 'MOTIVE_POWER_STATE_RESET_TO_DEFAULTS',
//     payload: MotivePowerState
// }

// type ChangeRoadNumberAction = {
//     type: 'MOTIVE_POWER_ROAD_NUMBER_CHANGE',
//     payload: {
//         number: number,
//         id: string
//     }
// }

// type FlowAction =
type RosterEntryAction =
    | NoopAction
    // | ResetToDefaultsAction
    // | ChangeCommentAction
    // | ChangeUnitTypeAction
    // | ChangeDecoderAddressAction
    // | ChangeRoadNameAction
    // | ChangeRoadNumberAction
    // | ChangeManufacturerAction
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
export const rosterEntryActions = {

    noop: () =>  ({ type: 'ROSTER_ENTRY_NOOP' }),

    // resetToDefaults: (): ResetToDefaultsAction => ({
    //     type: 'MOTIVE_POWER_STATE_RESET_TO_DEFAULTS',
    //     payload: defaultState
    // }),

    // changeRoadNumber: (scac: string, number: number): ChangeRoadNumberAction => ({
    //     type: 'MOTIVE_POWER_ROAD_NUMBER_CHANGE',
    //     payload: {
    //         number: number,
    //         id: `${scac} ${number}`
    //     }
    // }),
};

const NOOP_ACTION: NoopAction = { type: 'ROSTER_ENTRY_NOOP' };

// ============================================================================
// ============================================================================
// ----- Reducer -----
const rosterEntry = (state: RosterEntryState = defaultState, action: RosterEntryAction = NOOP_ACTION ) => {

    switch ( action.type ) {

        case NOOP_ACTION.type :
            return state;
            
        // case 'MOTIVE_POWER_DECODER_ADDRESS_CHANGE':
        //     return {...state, decoder: action.payload };
        //     // return Object.assign( {}, state
        //     //                      ,{decoder: action.payload });

        default:        
            return state;
    }
}

export default rosterEntry;
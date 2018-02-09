// @flow


// ----- Define the shape and associated datatypes for the Motive Power state
export type RosterListState = {
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

var defaultState: RosterListState = [{
        id: "EL 7777",
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
            filename:  ""
        }
    },
    {
        id: "EL 5860",
        scac:  "EL",
        number:  "5860",
        unitType:  "GP35",
        comment:  "",
        kit: {
            manufacturer: "Kato",
        },
        decoder: {
            dccAddress:  "5860",
            family:  "",
            model:  "DH-142",
            comment:  "",
            filename:  ""
        }
    }
];


type NoopAction = {

    type: 'ROSTER_LIST_NOOP'
}

type AddRosterEntryActin = {
    type: 'ROSTER_LIST_ADD_ENTRY',
    payload: RosterListState
}

// type ChangeCommentAction = {
//     type: 'MOTIVE_POWER_COMMENT_CHANGE',
//     payload: {
//         comment: string
//     }    
// }

// type ChangeRoadNumberAction = {
//     type: 'MOTIVE_POWER_ROAD_NUMBER_CHANGE',
//     payload: {
//         number: number,
//         id: string
//     }
// }

// type FlowAction =
type RosterListAction =
    | NoopAction
    | AddRosterEntryActin
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
    meta?: ?any
};


// Use redux-actions
// action name: <NOUN>_<VERB>
// action creator name: <verb><Noun>
// selector name: get<Noun>



// ============================================================================
// ============================================================================
// ----- Action Creators -----
export const rosterListActions = {

    noop: () =>  ({ type: 'ROSTER_LIST_NOOP' }),

    // resetToDefaults: (): ResetToDefaultsAction => ({
    //     type: 'MOTIVE_POWER_STATE_RESET_TO_DEFAULTS',
    //     payload: defaultState
    // }),

    // changeComment: (comment: string): ChangeCommentAction => ({
    //     type: 'MOTIVE_POWER_COMMENT_CHANGE',
    //     payload: {
    //         comment: comment
    //     }
    // }),

    // changeRoadNumber: (scac: string, number: number): ChangeRoadNumberAction => ({
    //     type: 'MOTIVE_POWER_ROAD_NUMBER_CHANGE',
    //     payload: {
    //         number: number,
    //         id: `${scac} ${number}`
    //     }
    // }),
};

const NOOP_ACTION: NoopAction = { type: 'ROSTER_LIST_NOOP' };

// ============================================================================
// ============================================================================
// ----- Reducer -----
const rosterList = (state: RosterListState = defaultState, action: RosterListAction = NOOP_ACTION ) => {

    switch ( action.type ) {

        case NOOP_ACTION.type :
            return state;

        // case 'ROSTER_LIST_NOOP':
        //     return state;
            
        // case 'MOTIVE_POWER_DECODER_ADDRESS_CHANGE':
        //     return {...state, decoder: action.payload };
        //     // return Object.assign( {}, state
        //     //                      ,{decoder: action.payload });

        // case 'MOTIVE_POWER_ROAD_NAME_CHANGE':
        //     return{...state, scac: action.payload.scac, id: action.payload.id };
        //     // return Object.assign({}, state, action.payload );

        default:        
            return state;
    }
}

export default rosterList;

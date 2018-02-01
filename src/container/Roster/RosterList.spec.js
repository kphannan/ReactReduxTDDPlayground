


import React from 'react';
// import { Provider } from 'react-redux'
import {Link} from 'react-router-dom'

import { shallow, mount } from 'enzyme';
// // import sinon from 'sinon';
// import Enzyme from 'enzyme';
// // import { typeOfNode }  from 'enzyme';

// import {
//   childrenToSimplifiedArray,
//   nodeEqual,
//   nodeMatches,
//   typeOfNode,
//   displayNameOfNode,
// } from 'enzyme/build/Utils';
import PageTitle from '../../component/PageTitle/PageTitle'
import Card from '../../component/Card/card';
import Title from '../../component/Title/title';
// import DescriptiveText from '../../component/DescriptiveText/descriptivetext';

// import { Grid, Row, Col } from 'react-flexbox-grid'

// import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
// import { createForms, Control } from 'react-redux-form';

// import ConnectedRosterList, { RosterList } from './RosterList';
import { RosterList } from './RosterList';



const middleware = [];
const mockStore = configureStore(middleware);


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
        address:  "",
        family:  "",
        model:  "",
        comment:  "",
        filename:  "",
    },
};



const createTestProps = () => ({
    handleButtonClick: () => {},
    motivePower: {
        id: "",
        scac:  "",
        number:  "",
        unitType:  "",
        comment:  "",
        kit: {
            manufacturer: "",
        },
        decoder: {
            address:  "4455",
            family:  "",
            model:  "",
            comment:  "",
            filename:  "",
        },
    },
    actions: {
                resetToDefaults:            () => {},

                // changeDecoderAddress:       (e) => {},
                // changeUnitId:               (e) => {},
                // changeRoadName:             (e) => {},
                // changeRoadNumber:           (e) => {},
                // changeComment:              (e) => {},
                // changeUnitType:             (e) => {},
                // changeManufacturer:         (e) => {},
             },
});




describe('Roster List page', () => {

    describe( 'The component should exist', () => {
        var wrapper;

        beforeEach( () => {
            // wrapper = shallow(<MotivePower />)
            wrapper = shallow(<RosterList {...createTestProps()} />)
            //
        });

        it( 'Should not be null', () => {

            expect(wrapper).not.toBeNull();
        });

        it( 'Should include one (1) instance', () => {

            // expect( wrapper.find( Control.text)).toHaveLength(5);
            // expect( wrapper.find( Control.textarea)).toHaveLength(1);
            // expect( wrapper.find('input')).toHaveLength(1);
            expect( wrapper.find(PageTitle)).toHaveLength(1);
            expect( wrapper.find(Link)).toHaveLength(2);
            expect( wrapper.find(Card)).toHaveLength(1);
            expect( wrapper.find(Title)).toHaveLength(1);

        });
    });


    describe( 'Rendering of Component (RosterList)', () => {
    });
});



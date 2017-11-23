// -----  -----

import React from 'react';
import { Provider } from 'react-redux'

import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
// import { createForms } from 'react-redux-form';

// import MotivePower from '../motivePower';
import { MotivePower } from '../motivePower';

import 'core-js/es6/map';
import 'core-js/es6/set';

import 'raf/polyfill';


const middleware = [];
const mockStore = configureStore(middleware);
// const dispatch = sinon.spy();

// const wrapper = shallow(
//     <Test dispatch={dispatch} store={mockStore({ runtime: {} })}

// const motivePower = {motivePower: {
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
// }};

// console.log( mockStore );
// console.log( mockStore() );
// console.log( mockStore().getState() );
// console.log( mockStore(defaultState).getState() );

// var testStore = mockStore(createForms(motivePower));
// console.log( testStore );
// console.log( testStore.getState() );
// console.log( testStore.getActions() );


Enzyme.configure({ adapter: new Adapter() });

// describe( '<MotivePower />', () => {
// 	it( 'renders 1 <MotivePower /> component', () => {
//         // const component = shallow( <MotivePower {...defaultState} store={testStore}/> );
//         // const component = mount( <MotivePower {...defaultState} store={testStore}/> );
// 		const component = mount(
// 		// // const component = shallow(
// 								    <Provider store={testStore}>
// 								            <MotivePower />
// 								    </Provider>,
// 		)
// 		// const component = mount( <Provider store={mockStore({motivePower: defaultState})}
// 		// 	                         <MotivePower />
// 		// 	                     </Provider> );
// 		expect( component ).toHaveLength( 1 );

// 	});
// });


describe( 'The component should exist', () => {
    // var wrapper;

    // beforeEach( () => {
    //     wrapper = shallow(<MotivePower />)
    // });

    it( 'Should not be null', () => {
        // expect(wrapper).not.toBeNull();
    });

    it( 'Should on include one (1) instance', () => {
        // expect( wrapper );
    });
})


describe( 'MotivePower rendering', () => {

    it( 'Should render ID label ');
    it( 'Should render an ID field');

    // --- Road Name ---
    it( 'Should render a  label');
    it( 'Should render a  text input field');

    // --- Road Number ---
    it( 'Should render a  label');
    it( 'Should render a  text input field');

    // --- Unit Type ---
    it( 'Should render a  label');
    it( 'Should render a  text input field');

    // --- Comment ---
    it( 'Should render a  label');
    it( 'Should render a  text input field');

    // --- Model Manufacturer ---
    it( 'Should render a  label');
    it( 'Should render a  text input field');

    // --- DCC Address ---
    it( 'Should render a  label');
    it( 'Should render a  text input field');

    // --- Reset to Default ---
    it( 'Should render a  button');
});


describe( 'Interaction', () => {

    describe( 'Reset to Default', () => {
        it( 'Should reset form fields to blanks' );
    });
});


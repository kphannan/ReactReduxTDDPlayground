// -----  -----

import React from 'react';
import { Provider } from 'react-redux'
import {Link} from 'react-router-dom'

import { shallow, mount } from 'enzyme';
// import sinon from 'sinon';
import Enzyme from 'enzyme';
// import { typeOfNode }  from 'enzyme';

import {
  childrenToSimplifiedArray,
  nodeEqual,
  nodeMatches,
  typeOfNode,
  displayNameOfNode,
} from 'enzyme/build/Utils';

import { Grid, Row, Col } from 'react-flexbox-grid'

import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { createForms, Control } from 'react-redux-form';

import ConnectedMotivePower, { MotivePower } from '../motivePower';

// import 'core-js/es6/map';
// import 'core-js/es6/set';

// import 'raf/polyfill';


const middleware = [];
const mockStore = configureStore(middleware);
// const dispatch = sinon.spy();


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

                changeDecoderAddress:       (e) => {},
                changeUnitId:               (e) => {},
                changeRoadName:             (e) => {},
                changeRoadNumber:           (e) => {},
                changeComment:              (e) => {},
                changeUnitType:             (e) => {},
                changeManufacturer:         (e) => {},
             },
});







Enzyme.configure({ adapter: new Adapter() });


describe('Motive Power page', () => {

    describe( 'The component should exist', () => {
        var wrapper;

        beforeEach( () => {
            // wrapper = shallow(<MotivePower />)
            wrapper = shallow(<MotivePower {...createTestProps()} />)
            //
        });

        it( 'Should not be null', () => {

            expect(wrapper).not.toBeNull();
        });

        it( 'Should include one (1) instance', () => {

            expect( wrapper.find( Control.text)).toHaveLength(6);
            expect( wrapper.find( Control.textarea)).toHaveLength(1);
            expect( wrapper.find('input')).toHaveLength(1);
            expect( wrapper.find(Link)).toHaveLength(2);
        });
    })


    describe( 'Rendering of Component (MotivePower)', () => {

        var wrapper;
        var element;
        var props;

        beforeEach( () => {
            // wrapper = shallow(<MotivePower />)
            wrapper = shallow(<MotivePower {...createTestProps()} />)
            //
        });

        describe( 'Model ID (key)', () => {

            beforeEach( () => {
                element = wrapper.find( '#unit_id');
                expect( element ).not.toBeNull();

                props = element.props();
            })

            it( 'Should render ID label (Unit ID)', () => {

                expect( element.closest( 'label').text() ).toMatch( "Unit ID" );
            });

            it( 'Should render a text input field', () => {

                expect( props ).toMatchObject( {type: 'text' });
            });

            it( 'Should have placeholder text ()', () => {

                expect( props ).toMatchObject( {placeholder: 'Unit ID'});
            });
        });

        // --- Road Name ---exc
        describe( 'Road Name', () => {

            beforeEach( () => {
                element = wrapper.find( '#roadname_id');
                expect( element ).not.toBeNull();

                props = element.props();
            })

            it( 'Should render a label (Road Name)', () => {

                const label = element.closest(Col).find('label');
                expect( label.text() ).toMatch( "Road Name" );
            });

            it( 'Should render a text input field', () => {

                expect( element.type()).toBe( Control.text )
            });

            it( 'Should have placeholder text (Road Name)', () => {

                expect( props ).toMatchObject( {placeholder: 'Road Name'});
            });

        });

        // --- Road Number ---
        describe( 'Road Number', () => {

            beforeEach( () => {
                element = wrapper.find( '#roadnumber_id');
                expect( element ).not.toBeNull();

                props = element.props();
            })

            it( 'Should render a label (Road Name)', () => {

                const label = element.closest(Col).find('label');
                expect( label.text() ).toMatch( "Road Number" );
            });

            it( 'Should render a text input field', () => {

                expect( element.type()).toBe( Control.text )
            });

            it( 'Should have placeholder text (Road Number)', () => {

                expect( props ).toMatchObject( {placeholder: 'Road Number'});
            });
        });

        // --- Unit Type ---
        describe( 'Unit Type', () => {

            beforeEach( () => {
                element = wrapper.find( '#unittype_id');
                expect( element ).not.toBeNull();

                props = element.props();
            })

            it( 'Should render a label (Unit Type)', () => {

                const label = element.closest(Col).find('label');
                expect( label.text() ).toMatch( "Unit Type" );
            });

            it( 'Should render a text input field', () => {

                expect( element.type()).toBe( Control.text )
            });

            it( 'Should have placeholder text (Unit Type)', () => {

                expect( props ).toMatchObject( {placeholder: 'Unit Type'});
            });
        });

        // --- Comment ---
        describe( 'Model Comment', () => {

            beforeEach( () => {
                element = wrapper.find( '#comment_id');
                expect( element ).not.toBeNull();

                props = element.props();
            })

            it( 'Should render a label (Comment)', () => {

                const label = element.closest(Col).find('label');
                expect( label.text() ).toMatch( "Comment" );
            });

            it( 'Should render a text area', () => {

                expect( element.type()).toBe( Control.textarea )
            });

            it( 'Should have placeholder text (Comment)', () => {

                expect( props ).toMatchObject( {placeholder: 'Comment'});
            });
        });

        // --- Model Manufacturer ---
        // describe( 'Model Manufacturer', () => {
        //     var element;
        //     var props;

        //     beforeEach( () => {
        //         element = wrapper.find( '#manufacturer_id');
        //         expect( element ).not.toBeNull();

        //         props = element.props();
        //     })

        //     it( 'Should render a label (Manufacturer)', () => {
        //         expect( element.closest( 'label').text() ).toMatch( "Manufacturer" );
        //     });

        //     it( 'Should render a text input field', () => {
        //         expect( element.type()).toBe( Control.text )
        //     });

        //     it( 'Should have placeholder text (Manufacturer)', () => {
        //         expect( props ).toMatchObject( {placeholder: 'Manufacturer'});
        //     });
        // });

        // --- DCC Address ---
        describe( 'DCC Address', () => {

            beforeEach( () => {
                element = wrapper.find( '#dccaddress_id');
                expect( element ).not.toBeNull();

                props = element.props();
            })

            it( 'Should render a label (DCC Address)', () => {

                const label = element.closest(Col).find('label');
                // const p = element.closest(Col);
                // const label = p.find('label');
                expect( label.text() ).toMatch( "DCC Address" );
            });

            it( 'Should render a text input field', () => {

                expect( element.type()).toBe( Control.text )
            });

            it( 'Should have placeholder text (DCC Address)', () => {

                expect( props ).toMatchObject( {placeholder: 'DCC Address'});
            });
        })

        // --- Reset to Default ---
        describe( 'Reset to Default button', () => {

            beforeEach( () => {
                element = wrapper.find( '#reset');
                expect( element ).not.toBeNull();

                props = element.props();
                // console.log( props )
            })

            // it( 'Should render a  button', () => {
            //     console.log( props )
            //     // expect( props ).toMatchObject( {type: 'submit' });
            //     expect( props ).toMatchObject( {type: 'button' });
            // });

            it( 'Should have the label (Reset to Default)', () => {
                // expect( props ).toMatchObject( {children: 'Reset to Default'});
                expect( props ).toMatchObject( {className: 'button secondary'});
            });

        })
    });


    describe( 'Interaction', () => {

        var   wrapper;
        var   props;
        var   spyMap;


        beforeAll( () => {

            const fnArray = [
                ['handleRoadNameChange',''],
                ['handleRoadNumberChange',''],
                ['handleUnitIdChange',''],
                ['handleCommentChange',''],
                ['handleUnitTypeChange',''],
                ['handleManufacturerChange',''],
                ['handleDecoderAddressChange',''],
                ['handleFormReset',''],
                ['handleFormSave',''],
            ];

            spyMap = new Map( fnArray );

            for (var key of spyMap.keys()) {
                // console.log(key);
                spyMap.set( key, jest.spyOn( MotivePower.prototype, key ))
            }
        });

        beforeEach( () => {
            // need to place this onClick on the button inside the component
            // wrapper = shallow(<MotivePower {...props} handleClick={jest.fn()}/>)
            wrapper = shallow(<MotivePower {...createTestProps()} />)
            //
        });

        describe( 'onChange functions are properly mapped', () => {

            test( 'change road number`', () => {

                var element;
                element = wrapper.find( '#roadnumber_id');
                expect( element ).not.toBeNull();

                element.simulate('change', { target: { value: "roadnumber" }})
                expect( spyMap.get( 'handleRoadNumberChange' )).toHaveBeenCalledTimes(1);
            });

            test( 'change road name`', () => {

                var element = wrapper.find( '#roadname_id');
                expect( element ).not.toBeNull();

                element.simulate('change', { target: { value: "roadname" }})
                expect( spyMap.get( 'handleRoadNameChange' )).toHaveBeenCalledTimes(1);
                // var actSpy = jest.spyOn( state, 'changeRoadNumber' )
                // var reducerSpy = jest.spyOn( motivePower, 'changeRoadNumber' )
                // spyMap.set( key, jest.spyOn( MotivePower.prototype, key ))
            });


            test( 'change dcc address', () => {
                var element = wrapper.find( '#dccaddress_id');

                // console.log(wrapper.debug())
                // wrapper.setProps({motivePower: {decoder: {address: 123}}});
                // console.log(element.props)
                element.simulate('change', { target: { value: "Mock: dccaddress" }})
                // console.log( "foo: ", element.value )
                expect( spyMap.get( 'handleDecoderAddressChange' )).toHaveBeenCalledTimes(1);
                // expect(element.props().value).toEqual("newEmail");
            });

            test( 'change model comment', () => {

                wrapper.find( '#comment_id').simulate('change', { target: { value: "comment" }})
                expect( spyMap.get( 'handleCommentChange' )).toHaveBeenCalledTimes(1);
            });

            test( 'change unit type', () => {

                wrapper.find( '#unittype_id').simulate('change', { target: { value: "unit type" }})
                expect( spyMap.get( 'handleUnitTypeChange' )).toHaveBeenCalledTimes(1);
            });

            test( 'change unit id', () => {

                wrapper.find( '#unit_id').simulate('change', { target: { value: "unit id" }})
                expect( spyMap.get( 'handleUnitIdChange' )).toHaveBeenCalledTimes(1);
            });

            test( 'change manufacturer', () => {

                wrapper.find( '#kit_manufacturer_id').simulate('change', { target: { value: "model manufacturer" }})
                expect( spyMap.get( 'handleManufacturerChange' )).toHaveBeenCalledTimes(1);
            });

            afterAll( () => {
                var r = Array.from(spyMap.keys());
                for (var key of spyMap.keys()) {
                    var m = spyMap.get( key )
                    if ( m.mock.calls.length === 0 ) {
                        continue;
                    }
                    r = r.filter( item => item != key );
                }

                // console.log( r.length )
                // console.log( r )
                // expect( r.length ).toEqual(99);
                // expect( r.length ).toEqual(0);
                // console.log( "zero")

    // expect(true).toBe(false);
                // expect( r ).toBeUndefined();
                // expect( 'foo' ).toContain( 'handleManufacturerChangeX')
                // console.log( "one")
                // expect( r ).toEqual( 'handleManufacturerChangeX')
                // console.log( "two")
                // expect( r ).toHaveLength(66);
                // console.log( "three")
            });
        });



        describe( 'Reset to Default', () => {

            beforeEach( () => {

                var x = wrapper.find( '#reset').props();
            })

            it( 'Should reset form fields to blanks', () => {
                wrapper.find( '#reset').simulate( 'click' );
                // expect( spy ).toHaveBeenClicked;
                expect( spyMap.get( 'handleFormReset' )).toHaveBeenCalledTimes(1);
            });
        });
        
        describe( 'Changing Road name or number also changes unit id', () => {

            describe( 'Changes to Road Name', () => {

                it( 'Changes to road name', () => {
                    var element = wrapper.find( '#roadname_id');
                    element.simulate('change', { target: { value: "Mock: road name" }});
                    // expect( true ).toBe(false)
                });

                it( 'Unit id updates with changes to road name', () => {
                    // expect( true ).toBe(false)
                });
            })

            describe( 'Changes to Road Number', () => {

                it( 'Changes to road name', () => {
                    // expect( true ).toBe(false)
                    wrapper.find( '#roadnumber_id').simulate('change', { target: { value: "Mock: road number" }})
                });

                it( 'Unit id updates with changes to road name', () => {
                    // expect( true ).toBe(false)
                });
            })
        });

    });

    // test('do test 1');
    // test('do test 2');

});

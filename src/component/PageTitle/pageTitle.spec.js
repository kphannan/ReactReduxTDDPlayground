/**
 * @jest-environment jsdom
 */

import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import PageTitle from './PageTitle';

Enzyme.configure({ adapter: new Adapter() })

describe('PageTitle component Testing', () => {

    describe('Smoke test', () => {

        test('PageTitle Component Renders', () => {
        const component = mount(<PageTitle tag="h1"  styles={ { paddingRight: 10 } }/>)
            //
        expect( component ).not.toBeNull();
        // const tree = toJson(component)
        // expect(tree).toMatchSnapshot()
        // expect( component ).toNotBe()
        })
    })



    describe('sub-components', () => {

        var wrapper;
        var element;

        beforeEach( () => {
            wrapper = mount(<PageTitle tag="h1"  styles={ { paddingRight: 10, marginTop: 42 } }>Title content</PageTitle>);
                //
            // expect( wrapper ).not.toBeNull();
        });


        test('PageTitle Component Renders', () => {
            // const component = mount(<PageTitle tag="h1"  styles={ { paddingRight: 10 } }/>)
            //     //
            // expect( component ).not.toBeNull();
            expect( wrapper ).not.toBeNull();
            // element = wrapper.find( '#dccaddress_id');
            // expect( element ).not.toBeNull();

            // props = element.props();
            // const tree = toJson(component)
            // expect(tree).toMatchSnapshot()
            // expect( component ).toNotBe()
        });

        test('verify title renders as h1 with text Add Application', () => {
            // const wrapper = shallow(<Title tag="h1">Add Application</Title>);
            // element = wrapper.find( '#dccaddress_id');
                //
            expect(wrapper.find('h1').text()).toBe('Title content');
        });

        //
        test('verify title renders as h3 with text Application Information', () => {
            // const wrapper = shallow(<Title tag="h3">Application Information</Title>);
                //
            // expect(wrapper.find('h3').length()).toBe(0);
            // expect(wrapper.find('h3').text()).toBeNull();
            // var element = wrapper.find('h3');
            // console.log( "Test: " + element.debug() );
            wrapper = mount(<PageTitle tag="h3"  styles={ { paddingRight: 10 } }>h3 title content</PageTitle>);
                //
            expect(wrapper.find('h3').text()).toBe('h3 title content');
        });

        //
        test('verify title render with proper style attribute', () => {
            // const wrapper = shallow(<Title tag="h1" styles={{ marginTop:0 }}>Application Information</Title>);
                //
            // console.log( wrapper.debug() );
            // var element = wrapper.find('h1');
            // console.log( element.debug() );
            // console.log( wrapper.find(PageTitle).props().styles.marginTop ).toBe(42);
            var props = wrapper.find(PageTitle).props();
            expect(props.styles.marginTop).toBe(42);
        });
    });
});

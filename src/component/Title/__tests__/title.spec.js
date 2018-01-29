/**
 * @jest-environment jsdom
 */

import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import Title from '../title';

Enzyme.configure({ adapter: new Adapter() })

describe('Add Application Page Testing', () => {

    Enzyme.configure({ adapter: new Adapter() })

    test('Add Application Page Renders', () => {
        const component = mount(<Title tag="h1"  styles={ { paddingRight: 10 } }/>)
        const tree = toJson(component)
        expect(tree).toMatchSnapshot()
    })

    test('verify title renders as h1 with text Add Application', () => {
        const wrapper = shallow(<Title tag="h1">Add Application</Title>);
        expect(wrapper.find('h1').text()).toBe('Add Application');
    });

    test('verify title renders as h3 with text Application Information', () => {
        const wrapper = shallow(<Title tag="h3">Application Information</Title>);
        expect(wrapper.find('h3').text()).toBe('Application Information');
    });

    test('verify title render with proper style attribute', () => {
        const wrapper = shallow(<Title tag="h1" styles={{ marginTop:0 }}>Application Information</Title>);
        expect(wrapper.find('h1').get(0).props.style.marginTop).toBe(0);
    });
});
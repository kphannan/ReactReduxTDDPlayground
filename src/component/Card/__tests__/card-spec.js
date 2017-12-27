/**
 * @jest-environment jsdom
 */

import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json'
import Card from '../card'

Enzyme.configure({ adapter: new Adapter() })

describe('Card Testing', () => {

    const component = shallow(<Card />)

    test('verify card render', () => {
        expect(component.find('.card').length).toBe(1);
    })

    test('verify against card snapshot', () => {
        const tree = toJson(component)
        expect(tree).toMatchSnapshot()
    })
});



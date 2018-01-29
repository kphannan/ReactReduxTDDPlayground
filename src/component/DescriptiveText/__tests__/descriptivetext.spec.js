/**
 * @jest-environment jsdom
 */

import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json'
import DescriptiveText from '../descriptivetext'
import '../descriptivetext.css'

Enzyme.configure({ adapter: new Adapter() })

describe('DescriptiveText Testing', () => {

    test('verify against descriptiveText snapshot', () => {
        const component = shallow(<DescriptiveText/>)
        const tree = toJson(component)
        expect(tree).toMatchSnapshot()
    })

    test("Should render Class Name ", ()=> {
        const component = shallow (<DescriptiveText className="text-input-container-error" />)
        expect(component.prop('className')).toEqual('text-input-container-error');
    });

    test("Should render Owner Name inside a Label tag", ()=> {
        const component = shallow(<DescriptiveText >Test Message</DescriptiveText>)
        expect(component.prop('children')).toEqual("Test Message");

    })

})
/**
 * @jest-environment jsdom
 */

import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json'
import Input from '../input'


Enzyme.configure({ adapter: new Adapter() })

describe('Input Component Testing', () => {

    test('verify against Input snapshot', () => {
        const component = shallow(<Input/>)
        const tree = toJson(component)
        expect(tree).toMatchSnapshot()
    })

    test("Should render input component elements", ()=> {
        const component = shallow (<Input className="text-input-container-error" id={"test"} type="text" onKeyUp={"handleKeyUp()"} />)
        expect(component.prop('className')).toEqual('text-input-container-error');
        expect(component.prop('children').type).toEqual('input');
        expect(component.prop('children').props["id"]).toEqual('test');
        expect(component.prop('children').props["type"]).toEqual("text");
        expect(component.prop('children').props["onKeyUp"]).toEqual("handleKeyUp()");
    })
})
/**
 * @jest-environment jsdom
 */

import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json'
import ErrorText from '../errorText'


Enzyme.configure({ adapter: new Adapter() })

describe('ErrorText Component Testing', () => {

    test('verify against ErrorText snapshot', () => {
        const component = shallow(<ErrorText/>)
        const tree = toJson(component)
        expect(tree).toMatchSnapshot()
    })

    test("Should render Class Name ", ()=> {
        const component = shallow (<ErrorText />)
        expect(component.prop('className')).toEqual('text-input-container error');
    });

    test("Should render Owner Name inside a Label tag", ()=> {
        const component = shallow(<ErrorText errorMessage={"LDAP is Invalid"} />)
        expect(component.prop('children').props.children).toEqual("LDAP is Invalid");
        expect(component.prop('children').type).toBe('p')
        expect(component.prop('children').props['className']).toEqual("error-msg");

    })
})
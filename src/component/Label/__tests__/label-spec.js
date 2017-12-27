/**
 * @jest-environment jsdom
 */

import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json'
import Label from '../label'


Enzyme.configure({ adapter: new Adapter() })

describe('Label rendering Testing', () => {

    test('verify against label snapshot', () => {
        const component = shallow(<Label/>)
        const tree = toJson(component)
        expect(tree).toMatchSnapshot()
    })

    test("Should render Class Name ", ()=> {
        const component = shallow (<Label className="text-input-container-error" />)
        expect(component.prop('className')).toEqual('text-input-container-error');
    });

    test("Should render Owner Name inside a Label tag", ()=> {
        const component = shallow(<Label labelClassVal={"text-input-container-error"}>Owner Ldap</Label>)
        expect(component.prop('children').props.children).toEqual("Owner Ldap");
       expect(component.prop('children').type).toBe('label')

    })

})
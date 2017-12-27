import React from 'react'
import Enzyme from 'enzyme';
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Header from '../header'

Enzyme.configure({ adapter: new Adapter() })

describe('Header Testing', () => {

  const component = shallow(<Header />)

  test('verify header title', () => {
    expect(component.contains('W/MRI')).toBe(true)
  })

  test('verify against header snapshot', () => {
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  test('verify css header matches UX style guide header class', () => {
    expect(component.containsMatchingElement('.header'));
  })
})

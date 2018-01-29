import React from 'react'
import Enzyme from 'enzyme';
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import Icon from '../icon';

Enzyme.configure({ adapter: new Adapter() })

describe('Icon Testing', () => {

  const component = mount(<Icon name="information_outlined" color="orange" styles={{ paddingRight : 10 }}/>)

  test('verify against icon snapshot', () => {
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  test('verify icon renders on page', () => {
    expect(component.containsAllMatchingElements([
      <Icon />
    ])).toBeDefined()
  })

  test('verify icon css matches UX style guide title class', () => {
    expect(component.find('.icon_information_outlined').length).toBe(1);
    expect(component.find('.orange-text').length).toBe(1);
    expect(component.get(0).props.styles.paddingRight).toBe(10);
  });

})
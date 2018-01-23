import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import { Route, MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import configureStore from '../../../Store/configureStore';

import Main from '../main'

import { MotivePower } from '../../MotivePower/motivePower'
import  ConnectedRoster, { Roster }  from '../../Roster/roster'



Enzyme.configure({adapter: new Adapter()})


describe('Main Renders', () => {

  const component = shallow(<Main/>)

  test('Main Entry Page renders with header', () => {
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  });

  test('className on div element is "main"', () =>{

    expect(component.get(0).props.className).toBe("main");
  });
})

describe('Routing', () => {

  // test('renders AddApplicationPage at /application/new', () => {
  //     const store = configureStore();
  //     const wrapper = mount(<Provider store={store}><MemoryRouter initialEntries={['/applications/new']}><Main/></MemoryRouter></Provider>)
  //   expect(wrapper.find(
  //     AddApplicationPage
  //   )
  //     .exists()).toBe(true)
  // })

  // test('does not render AddApplicationPage at / ', () => {
  //   const store = configureStore();
  //   const wrapper = mount(<Provider store={store}><MemoryRouter initialEntries={['/']}><Main/></MemoryRouter></Provider>)
  //   expect(wrapper.find(
  //     AddApplicationPage
  //   )
  //     .exists()).toBe(false)
  // })

  test('does not render MotivePower at / ', () => {
    const store = configureStore();
    const wrapper = mount(<Provider store={store}><MemoryRouter initialEntries={['/']}><Main/></MemoryRouter></Provider>)
    expect(wrapper.find(MotivePower)
                  .exists()).toBe(false)
  })

  test('renders MotivePower at /roster', () => {
    const store = configureStore();
    const wrapper = mount(<Provider store={store}>
                            <MemoryRouter initialEntries={['/roster/4', '/']} initialIndex={0}>
                              <Main/>
                            </MemoryRouter>
                          </Provider>)
    // console.log( wrapper.debug() )
    // console.log( wrapper.find("Main").debug() )

    // TODO: figure out how to 'find' the component at the end of a 'route'
    expect(wrapper.find(MotivePower)
                  .exists()).toBe(true)
  })


})


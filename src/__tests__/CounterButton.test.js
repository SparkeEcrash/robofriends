import '../setupTests';
import {shallow, mount, render} from 'enzyme';
import {shallowToJson } from 'enzyme-to-json';
import React from 'react';
import CounterButton from '../components/CounterButton';

it('expect to render Card component', () => {
	const mockColor = 'red';
	expect(shallowToJson(shallow(<CounterButton color={mockColor}/>))).toMatchSnapshot();
})

it('correctly increments the counter', () => {
	const mockColor = 'red';
	const wrapper = shallow(<CounterButton color={mockColor}/>);
	wrapper.find('[id="counter"]').simulate('click');
	wrapper.find('[id="counter"]').simulate('click');
	expect(wrapper.state()).toEqual({ count: 2 });
	wrapper.find('[id="counter"]').simulate('click');
	expect(wrapper.state()).toEqual({ count: 3 });
	wrapper.find('[id="counter"]').simulate('keypress');
	expect(wrapper.state()).toEqual({count:3});
	// expect(wrapper.props()).toEqual({color: 'red'})
	expect(wrapper.props().color).toEqual('red');

})
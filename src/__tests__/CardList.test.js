import '../setupTests';
import {shallow, mount, render} from 'enzyme';
import {shallowToJson } from 'enzyme-to-json';
import React from 'react';
import CardList from '../components/CardList';

//shallow render the component
/*
test('expect to render Card component', () => {
	expect(shallow(<Card />).length).toEqual(1)
})
*/

//taking snapshots
it('expect to render Card component', () => {
	const mockRobots = [
		{
			id: 1,
			name: 'John Snow',
			username: 'JohnJohn',
			email: 'john@gmail.com'
		}
	]
	expect(shallowToJson(shallow(<CardList robots={mockRobots}/>))).toMatchSnapshot();
})

//snapshot testing is used to detect any changes made to the component in comparison to a snapshot that was taken before
//if you are getting empty ShallowWrapper{} delete node_modules and package-lock.json and do 'npm install' *incorrect and more research necessary*

//run "npm test -- --coverage" to see how much of your code is covered with testing
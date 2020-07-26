import {shallow} from 'enzyme';
import {shallowToJson } from 'enzyme-to-json';
import React from 'react';
import MainPage from '../components/MainPage';

/*TEST WITHOUT REFACTORING*/
// test('expect to render MainPage component', () => {
// 	const mockStore = {
// 		robots: [],
// 		searchField: ''
// 	}
// 	expect(shallowToJson(shallow(<App store={mockStore}/>))).toMatchSnapshot();
// })
//use redux-mock-store npm package to use a fake store for store prop in App

/*TEST WITH REFACTORING*/
let wrapper;
beforeEach(() => {
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [],
		searchfield: '',
		isPending: false
	}
	wrapper = shallow(<MainPage {...mockProps}/>);
})

test('renders MainPage without crashing', () => {
	expect(shallowToJson(wrapper)).toMatchSnapshot();
})

test('filters robots correctly', () => {
	expect(wrapper.instance().filterRobots()).toEqual([])
})

test('filters robots correctly 2', () => {
	const mockProps2 = {
		onRequestRobots: jest.fn(),
		robots: [{
			id: 3,
			name: 'John',
			email: 'john@gmail.com'
		}],
		searchfield: 'ohn',
		isPending: false
	}
	const wrapper2 = shallow(<MainPage {...mockProps2}/>);
	expect(wrapper2.instance().filterRobots()).toEqual([{
		id: 3,
		name: 'John',
		email: 'john@gmail.com'
	}]);
})

test('filters robots correctly 3', () => {
	const mockProps3 = {
		onRequestRobots: jest.fn(),
		robots: [{
			id: 3,
			name: 'John',
			email: 'john@gmail.com'
		}],
		searchfield: 'nopossibleresults',
		isPending: false
	}

	const filteredRobots=[];

	const wrapper3 = shallow(<MainPage {...mockProps3}/>);
	expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
})
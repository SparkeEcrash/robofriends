import React, {Component} from 'react';
import CounterButton from './CounterButton';

class Header extends Component {
	//this makes it so that when the parent component that is using this component re-renders, 
	//the part of the parent component that is using this component does not have to re-render
	// increasing browser performance
	shouldComponentUpdate(nextProps, nextState) {
		return false;
		//never update this component which is dangerous
	}

	render() {
		console.log('Header');
		return (
			<div>
				<h1 className='f1'>RoboFriends</h1>
				<CounterButton color={'red'}></CounterButton>
			</div>
		);
	}
}

export default Header
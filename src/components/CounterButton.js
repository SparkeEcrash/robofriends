import React, { PureComponent } from 'react';

//PureComponent is like a lightweight smart component for simple components
//use PureComponent will only re render when its props change and has a built in 
//shouldComponentUpdate that only triggers when its props changee

//it only uses shallow comparisons when trying to detect changes in the prop so when
//changes are made in the props in a very deep nested level the changes wont be detected

//Having your own shouldComponentUpdate lifecycle method in your component will replace
//the need for having a PureComponent (though adding performance penalty because you are adding
//a function) with a default shouldComponentUpdate setting
class CounterButton extends PureComponent {
	constructor() {
		super();
		this.state = {
			count: 0
		}
	}

	//dont overuse this and measure if it actually increases performance
	//because it may cause bug and miss updates that it should re-render to
	shouldComponentUpdate(nextProps, nextState) {
		if (this.state.count !== nextState.count) {
			return true;
		}
		return false;
	}

	updateCount = () => {
		this.setState( state => {
			return {count: state.count + 1}
		})
	}

	render() {
		return (
			<button id={`counter`} color={this.props.color} onClick={this.updateCount}>
				Count: {this.state.count}
			</button>
		)
	}
}

export default CounterButton;
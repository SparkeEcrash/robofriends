import React from 'react';
import {connect} from 'react-redux';
// import CardList from '../components/CardList';
// import SearchBox from '../components/SearchBox';
// import Scroll from '../components/Scroll';
// import ErrorBoundry from '../components/ErrorBoundary';
// import Header from '../components/Header';
//import './App.css';

import MainPage from '../components/MainPage';

import {setSearchField, requestRobots} from '../actions';

const mapStateToProps = stateJames => {
	return {
		// searchfield: stateJames.searchfield
		// searchfield: state.searchRobots.searchfield
		// 'searchRobots' rudcer identifier would be necessary if there were combined reducers in the store

		searchfield: stateJames.searchRobots.searchfield,
		// combinedreducers is now used with multple reducers

		robots: stateJames.requestRobots.robots,
		isPending: stateJames.requestRobots.isPending,
		error: stateJames.requestRobots.error
	}
}

const mapDispatchToProps = dispatchJames => {
	return {
		onSearchChange: event => dispatchJames(setSearchField(event.target.value)),
		// setSearchField returns an type/paylaod object to dispatchJames not triggering redux thunk and going straight to reducers

		onRequestRobots: () => dispatchJames(requestRobots())

		/*
		onRequestRobots: () => requestRobots(dispatchJames)
		//dispatch is taken from the function paramter in mapDispatchToProps and sent right into
		//the function parameter for multiple actions to be processed inside requestRobots()
		*/
	}
}

class App extends React.Component {
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		robots: [],
	// 		searchfield: ''
	// 	}
	// 	console.log('constructor');
	// }

	componentDidMount() {
		// fetch('https://jsonplaceholder.typicode.com/users')
		// .then(response => response.json())
		// .then(users => this.setState({robots: users}));
		// console.log('componentDidMount');

		this.props.onRequestRobots();
	}

	/*
	onSearchChange = events => {
		this.setState({
			searchfield: events.target.value
		}
		// , () => {
		// 	const filteredRobots = robots.filter(robots => {
		// 		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		// 	});
		// 	this.setState({
		// 		robots: filteredRobots
		// 	})
		// }
		)
	}
	*/

	render() {
		// const {robots} = this.state;
		const { searchfield, onSearchChange, robots, isPending } = this.props;
		const filteredRobots = robots.filter(robots => {
			console.log(robots)
			return robots.name.toLowerCase().includes(searchfield.toLowerCase());
		});
		console.log('render');

		return (
			/*
			<div className="tc">
				<Header />
				<SearchBox searchChange={onSearchChange}/>
				<Scroll>
					{ isPending ? <h1>Loading</h1> :
						<ErrorBoundry>
							<CardList robots={filteredRobots}></CardList>
						</ErrorBoundry>
					}
				</Scroll>
			</div>
			*/
			<MainPage {...this.props}></MainPage>
		)
	}
}

//connect() is a higher order function which returns another function
export default connect(mapStateToProps, mapDispatchToProps)(App);

//redux store gets a 'mapStateToProps' function which takes in state as the function parameter input
	//for redux to run behind the scenes... it would have to do mapStateToProps(stateObject)
//redux store gets a 'mapDispatchToProps' function which takes in the dispatch object as the function paramter input
	//for redux to run behind the scenes... it would have to do mapDispatchToProps(dispatchObject)
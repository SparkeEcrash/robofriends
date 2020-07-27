import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundary';
import Header from '../components/Header';
import './MainPage.css';


class MainPage extends React.Component {

	componentDidMount() {
		this.props.onRequestRobots();
	}

	filterRobots = () => {
		return this.props.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.props.searchfield.toLowerCase());
		})
	}

	render() {
		// const {robots} = this.state;
		const { onSearchChange, isPending } = this.props;
		console.log('render');

		return (
			<div className="tc">
				<Header />
				<SearchBox searchChange={onSearchChange}/>
				<Scroll>
					{ isPending ? <h1>Loading</h1> :
						<ErrorBoundry>
							<CardList robots={this.filterRobots()}></CardList>
						</ErrorBoundry>
					}
				</Scroll>
			</div>
		)
	}
}


export default MainPage;


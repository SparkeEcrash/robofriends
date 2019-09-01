import * as actionTypes from './constants';

const initialStateSearch = {
	searchfield: ''
}

export const searchRobots = (state=initialStateSearch, action={}) => {
	switch(action.type) {
		case actionTypes.CHANGE_SEARCHFIELD:
			return Object.assign({}, state, {searchfield: action.payload});
			// return {
			// 	...state,
			// 	searchfield: action.payload
			// }
		default: 
			return state;
	}
}

const initialStateRobots = {
	isPending: false,
	robots: [],
	error: ''
}

export const requestRobots = (state=initialStateRobots, action={}) => {
	switch(action.type) {
		case actionTypes.REQUEST_ROBOTS_PENDING:
			return Object.assign({}, state, {isPending: true})
		case actionTypes.REQUEST_ROBOTS_SUCCESS:
			return Object.assign({}, state, { robots: action.payload, isPending: false})
		case actionTypes.REQUEST_ROBOTS_FAILED:
			return Object.assign({}, state, {error: action.payload, isPending: false})
		default:
			return state;
	}
}
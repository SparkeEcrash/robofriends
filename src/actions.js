import {apiCall} from './api/api';
import * as actionTypes from './constants';

export const setSearchField = (text) => ({
	type: actionTypes.CHANGE_SEARCHFIELD,
	payload: text
})

//function is returned instead of an object for Redux Thunk to register
//Redux thunk makes the returned function input parameter be the dispatch
export const requestRobots = () => (dispatch) => {
	dispatch({ type: actionTypes.REQUEST_ROBOTS_PENDING});
	apiCall('https://jsonplaceholder.typicode.com/users')
		.then(data => dispatch({type:actionTypes.REQUEST_ROBOTS_SUCCESS, payload: data}))
		.catch(error => dispatch({type: actionTypes.REQUEST_ROBOTS_FAILED, payload: error}))
}
import * as actions from './../actions';
import {
	CHANGE_SEARCHFIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './../constants'

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware])

test('should create an action to search robots', () => {
	const text = 'wooo';
	const expectedAction = {
		type: CHANGE_SEARCHFIELD,
		payload: text
	}
	expect(actions.setSearchField(text)).toEqual(expectedAction)
})

test('handles requesting robots API', () => {
	const expectedAction = {
		type: REQUEST_ROBOTS_PENDING
	}
	//create fake store with thunk middleware
	const store = mockStore();
	//fake dispatch the action we're trying to test
	store.dispatch(actions.requestRobots());
	//get the action that was dispatched from the store
	const action = store.getActions();
	console.log(action);
	//check the type property from the action
	expect(action[0]).toEqual(expectedAction)

	//NOTE FOR CHECKING ACTION TYPES THAT ARE IN THE apiCall() promise
	//check out the redux-mock-store documentation under the Asynchronous actions section. You will need to return the apiCall from the Actions so you can get a promise to await and apply assertions to.
})


/////////////////////////////////
// actions/index.js
//

import sampleData from '../components/sampleData';
import { call, put, takeEvery } from 'redux-saga/effects';

import { 
	UPDATE_FIELD, 
	UPDATE_FIELD_ONE,
	CREATE_FIELD,
	FETCH_DATA_REQUESTED,
    FETCH_DATA_SUCCESSFUL,
	FETCH_DATA_FAILED,
	GET_DATA,
	GET_DATA_ASYNC
} from "../constants/action-types";


export function fetchDataRequested(payload) {
	return {type: FETCH_DATA_REQUESTED, payload: ""};
}

export function fetchDataSuccessful(payload) {
	return {type: FETCH_DATA_SUCCESSFUL, payload: ""};
}

export function fetchDataFailed(payload) {
	return {type: FETCH_DATA_FAILED, payload: ""};
}

export function updateField(fieldId, value) {
	return {type: UPDATE_FIELD, fieldId, value};
};

export function updateFieldOne(fieldName, value) {
	return {type: UPDATE_FIELD_ONE, fieldName, value};
};

export function createField(fieldId, fieldName, value) {
//	console.log("actions:createField: fieldId: " + fieldId, ", fieldName: " + fieldName + ", initialValue: " + value);
	return {type: CREATE_FIELD, fieldId, fieldName, value};
};

export function getData(data) {
	return {type: GET_DATA, data};
}


// simulate an async call for our saga to use.
export function getDataAsync() {

	console.log("Actions:getDataAsync()");

	return function(dispatch) {
		return new Promise(function (resolve, reject) {

			// simulate an async call
			// with a timer...
			const timeOutVal = 500; // 1/2 seconds

			setTimeout( 
			function() {
				
				console.log("Set timer: " + timeOutVal);
				if(typeof sampleData !== 'undefined') {
			
				//	console.log("GetStudies: " + val);
					return resolve(JSON.stringify(sampleData));
				} else {
					let err = new Error("Failed to getStudyProps()");
					dispatch({type: FETCH_DATA_FAILED});
					return reject(err);
				}
			}
			, timeOutVal)
		})
		.then(json => {
			dispatch({type: FETCH_DATA_SUCCESSFUL, payload: json});
		});
	}
}

export function getDataAsyncSaga() {

	console.log("Actions:getDataAsyncSaga()");

	return new Promise(function (resolve, reject) {

		// simulate an async call
		// with a timer...
		const timeOutVal = 500; // 1/2 seconds

		setTimeout( 
		function() {
			
			console.log("Set timer: " + timeOutVal);
			if(typeof sampleData !== 'undefined') {
		
			//	console.log("GetStudies: " + val);
				return resolve(JSON.stringify(sampleData));
			} else {
				let err = new Error("Failed to getStudyProps()");
				return reject(err);
			}
		}
		, timeOutVal)
	});
}

export function* apiSideEffect(action) {
	try {
		const data = yield call(getDataAsyncSaga);
		yield put({ type: FETCH_DATA_SUCCESSFUL, payload: data });
	} catch (e) {
		yield put({ type: FETCH_DATA_FAILED, payload: e.message });
	}
	}
	
	// the 'watcher' - on every 'API_BUTTON_CLICK' action, run our side effect
export function* apiSaga() {
	yield takeEvery(FETCH_DATA_REQUESTED, apiSideEffect);
}


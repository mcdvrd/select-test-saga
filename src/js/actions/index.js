/////////////////////////////////
// actions/index.js
//


import { 
	UPDATE_FIELD, 
	UPDATE_FIELD_ONE,
	CREATE_FIELD
} from "../constants/action-types";


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

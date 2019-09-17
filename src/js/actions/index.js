/////////////////////////////////
// actions/index.js
//

import { 
	UPDATE_FIELD, 
	UPDATE_FIELD_ONE
} from "../constants/action-types";


export function updateField(fieldId, value) {
	return {type: UPDATE_FIELD, fieldId, value};
};

export function updateFieldOne(fieldName, value) {
	return {type: UPDATE_FIELD_ONE, fieldName, value};
};

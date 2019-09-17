//////////////////////////
// src/reducers/index.js
//

import { 
  UPDATE_FIELD_ONE, UPDATE_FIELD
} from "../constants/action-types";



const initialState =  {
  fields: [
   {
      id: 1,
      name: "fieldOne",
      value: "Initial Value1"
   },
   {
      id: 2,
      name: "fieldTwo",
      value: "Initial Value2"
   },
   {
      id: 3,
      name: "fieldThree",
      value: "Initial Value3"
   }],

   fieldIds: [1, 2, 3],

   fieldOne: {
     id: 4,
     name: "Single field one",
     value: ""
   }
};

// const selectFieldValue = (state, fieldId) => state.fields[fieldId-1].value;

function rootReducer(state = initialState, action) {

    switch(action.type) {

        case UPDATE_FIELD_ONE: {

          // try to update ONLY filedOne
          return Object.assign({}, state, {
            fieldOne: Object.assign({}, { name: action.fieldName, value: action.value}) 
          });

        }

        case UPDATE_FIELD: {
       //   console.log("Update field ID: " + action.fieldId + ", value: " + action.value);
       //   console.log("UPDATE_FIELD: " + selectFieldValue(state, action.fieldId));

          return Object.assign({}, state, {
             fields: state.fields.map((field) => {
                return (field.id === action.fieldId) ? {id: action.fieldId, name: field.name, value: action.value} : field;
             })
          });

         // return state;
        }
     
        default:
          return state;
      }

    //  return state;

}

export default rootReducer;
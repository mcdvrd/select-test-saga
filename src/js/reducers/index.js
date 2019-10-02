//////////////////////////
// src/reducers/index.js
//

import { 
  UPDATE_FIELD_ONE, UPDATE_FIELD, CREATE_FIELD, GET_DATA, FETCH_DATA_REQUESTED, FETCH_DATA_FAILED, FETCH_DATA_SUCCESSFUL, GET_DATA_ASYNC
} from "../constants/action-types";


const initialState =  {
  fields: [
   {
      id: 1,
      name: "fieldOne",
      value: ""
   },
   {
      id: 2,
      name: "fieldTwo",
      value: "Initial Value2"
   },
   {
      id: 3,
      name: "fieldThree",
      value: ""
   }],

   fieldIds: [1, 2, 3],

   fieldOne: {
     id: 4,
     name: "Single field one",
     value: ""
   },
   sampleData: "{'data': 'Not inialized'}",
   isLoading: false
};

// const selectFieldValue = (state, fieldId) => state.fields[fieldId-1].value;

function rootReducer(state = initialState, action) {

   switch(action.type) {

      case FETCH_DATA_REQUESTED:
         return Object.assign({}, state, {
            isLoading: true
            });

      case FETCH_DATA_FAILED:
            return Object.assign({}, state, {
               isLoading: false,
               sampleData: null,
             });

      case FETCH_DATA_SUCCESSFUL:
             const nVal = JSON.parse(action.payload);
            return Object.assign({}, state, {
               isLoading: false,
               sampleData: Object.assign({}, nVal) 
               });

      case GET_DATA:
         return Object.assign({}, state, {
            sampleData: Object.assign({}, state, action.sampleData) 
         });

      // case GET_DATA_ASYNC:
      //    return Object.assign({}, state, {
      //       sampleData: Object.assign({}, state, action.sampleData) 
      //    });

      case UPDATE_FIELD_ONE: {

         // try to update ONLY fieldOne
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
      }

      case CREATE_FIELD: {

      console.log("CreateField:reducer:called:action " + JSON.stringify(action));

      let found = state.fieldIds.find(id => {
            return action.fieldId === id;
      });  

      if (found === undefined) {
            return Object.assign({}, state, {
               fieldIds: state.fieldIds.concat(action.fieldId),
               fields: state.fields.concat({id: action.fieldId, name: action.fieldName, value: action.value})
            })
         } else {
            return state;
         }
      }
   
      default:
         return state;
   }

    //  return state;

}

export default rootReducer;
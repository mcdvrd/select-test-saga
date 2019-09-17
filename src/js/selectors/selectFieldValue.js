////////////////////////////////
// selectors/selectFieldValue
//

import { createSelector } from 'reselect';

const selectFieldValue = (state, fieldId) => state.fields[fieldId-1].value;

/*
const selectFieldValue = (state, fieldId) => state.fields.find((field) => {
  console.log("Selector:field: " + field.value);
 // return fieldId === field.id;
    if(fieldId === field.id) {
      console.log("Found:id: " + fieldId + ", value: " + field.value);
      console.log("Will return: " + field.value);
      return (field.stupid);
    } else {
      return null;
    }
});
*/


// Create a momoized selector to get the field value.
// const selectFieldValue = createSelector(
//     mSelectFieldValue,
//     (value) =>  {return value}
//   );


export default selectFieldValue;
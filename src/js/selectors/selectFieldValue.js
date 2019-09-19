////////////////////////////////
// selectors/selectFieldValue
//

// import { createSelector } from 'reselect';

// only works for CONSECUTIVE ids
// const selectFieldValue = (state, fieldId) => state.fields[fieldId-1].value;


const selectFieldValue = (state, fieldId) => state.fields.find((field) => {
 
    return fieldId === field.id;
});


// Create a momoized selector to get the field value.
// const selectFieldValue = createSelector(
//     mSelectFieldValue,
//     (value) =>  {return value}
//   );


export default selectFieldValue;
/////////////////////////////////////////
// containers/TextFieldContainer.jsx
//
import  { connect } from 'react-redux';

import { updateField, updateFieldOne } from '../actions/index';
import TextFieldControl from '../controls/TextFieldControl';
import selectFieldValue from '../selectors/selectFieldValue';

const mapStateToProps = (state, props) => {
    return {
        value: selectFieldValue(state, props.fieldId).value
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateField: (fieldId, value) => dispatch(updateField(fieldId, value)),
        updateFieldOne: (value) => dispatch(updateFieldOne(value))
    };
  };

const TextFieldContainer = connect (
    mapStateToProps,
    mapDispatchToProps
)(TextFieldControl);

export default TextFieldContainer;


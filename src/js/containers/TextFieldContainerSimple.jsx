/////////////////////////////////////////
// containers/
//  TextFieldContainerSimple.jsx
//
import  { connect } from 'react-redux';

import { updateFieldOne } from '../actions/index';
import TextFieldControl from '../controls/TextFieldControl';


const mapDispatchToProps = (dispatch) => {
    return {

        updateFieldOne: (fieldId, value) => dispatch(updateFieldOne(fieldId, value))
	};
  };

const TextFieldContainer = connect (
    null,
    mapDispatchToProps
)(TextFieldControl);

export default TextFieldContainer;


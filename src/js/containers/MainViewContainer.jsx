/////////////////////////////////////////
// containers/MainView2Container.jsx
//
// slightly more complex MainView to
// test selectors.
//

import  { connect } from 'react-redux';
// import {selectFields} from '../selectors/selectFields';
import {selectFieldIds} from '../selectors/selectFieldIds';
import MainView from '../components/MainView';
import {createField} from '../actions';

const mapStateToProps = (state) => {
    return {
       // if this is mapped, there is re-render each time of ALL fields.
       // fields: selectFields(state),
        fieldIds: selectFieldIds(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createField: (fieldId, fieldName, initialValue) => dispatch(createField(fieldId, fieldName, initialValue))
    };
  };


const MainViewContainer = connect (
    mapStateToProps,
    mapDispatchToProps
)(MainView);

export default MainViewContainer;



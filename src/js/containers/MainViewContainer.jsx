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

import {
    createField, 
    getData, 
    getDataAsync, 
    fetchDataRequested, 
    fetchDataFailed, 
    fetchDataSuccessful, 
  //  apiSaga
} from '../actions';

const mapStateToProps = (state) => {
    return {
       // if this is mapped, there is re-render each time of ALL fields.
       // fields: selectFields(state),
        fieldIds: selectFieldIds(state),
        isLoading: state.isLoading,
        sampleData: state.sampleData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createField: (fieldId, fieldName, initialValue) => dispatch(createField(fieldId, fieldName, initialValue)),
        getData: (data) => dispatch(getData(data)),
        getDataAsync: () => dispatch(getDataAsync()),
        fetchDataRequested: () => dispatch(fetchDataRequested()),
        fetchDataFailed: () => dispatch(fetchDataFailed()),
        fetchDataSuccessful: () => dispatch(fetchDataSuccessful()),
  //      apiSaga() { dispatch(apiSaga) }
    };
  };


const MainViewContainer = connect (
    mapStateToProps,
    mapDispatchToProps
)(MainView);

export default MainViewContainer;



/////////////////////////////////////////
// containers/MainView2Container.jsx
//
// slightly more complex MainView to
// test selectors.
//

import  { connect } from 'react-redux';
import {selectFields} from '../selectors/selectFields';
import {selectFieldIds} from '../selectors/selectFieldIds';

import MainView2 from '../components/MainView2';

const mapStateToProps = (state) => {
    return {
       // if this is mapped, there is re-render each time of ALL fields.
       // fields: selectFields(state),
        fieldIds: selectFieldIds(state)
    };
};


const MainView2Container = connect (
    mapStateToProps,
    {}
)(MainView2);

export default MainView2Container;



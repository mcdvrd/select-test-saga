/////////////////////////////////////////
// MainView.jsx

import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextFieldContainer from '../containers/TextFieldContainer';
import TextFieldContainerSimple from '../containers/TextFieldContainerSimple';



const MainView = (props) => {


    const fieldPropsA =  {
		name: "field[1]",
		description: "Field Title",
		type: 'standard-dense',
		style: {float: 'left', width: '50%'},
		section: 1
    };

    const fieldPropsB =  {
		name: "field[2]",
		description: "Field Title",
		type: 'standard-dense',
		style: {float: 'left', width: '50%'},
		section: 1
    };

    const fieldPropsC =  {
		name: "field[3]",
		description: "Field Title",
		type: 'standard-dense',
		style: {float: 'left', width: '50%'},
		section: 1
    };

    const fieldProps2 =  {
		name: "direct to FieldOne",
		description: "Field Title",
		type: 'standard-dense',
		style: {float: 'left', width: '50%'},
		section: 1
    };
    
    return (
        <div>
            <h4>MainView</h4>

            <Grid item xs={12} key={fieldName}>
             <TextFieldContainer 
                fieldId={1}
                fieldProps={fieldPropsA}
                enabled={false}
                />
            <TextFieldContainer 
                fieldId={2}
                fieldProps={fieldPropsB}
                enabled={false}
                />
            <TextFieldContainer 
                fieldId={3}
                fieldProps={fieldPropsC}
                enabled={false}
                />
            <TextFieldContainerSimple 
                fieldId="FieldOne"
                fieldName={"FieldOne"}
                fieldProps={fieldProps2}
                enabled={false}
                />
			</Grid>
        </div>
    );
}

export default MainView;
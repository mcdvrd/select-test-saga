/////////////////////////////////////////
// MainView2.jsx
// selector test
//

import React from 'react';
import Grid from '@material-ui/core/Grid';

import TextFieldContainer from '../containers/TextFieldContainer';
import TextFieldContainerSimple from '../containers/TextFieldContainerSimple';


const MainView2 = (props) => {

    const {
      fieldIds
    } = props;

    const fieldProps2 =  {
      name: "direct to FieldOne",
      description: "Field Title",
      type: 'standard-dense',
      style: {float: 'left', width: '50%'},
      section: 1
    };

    // Create new components based on the fields[] in the store
    const textComponents = fieldIds.map((fieldId) => {

      const controlName = "Field-" + fieldId;

      const fieldProps = {
        name: controlName,
        description: "field",
        type: 'standard-dense',
		    style: {float: 'left', width: '50%'}
      };

      return (
        <Grid item xs={12} key={fieldId}>
          <TextFieldContainer 
            fieldId={fieldId}
            fieldProps={fieldProps}
            enabled={false}
            />
        </Grid>
      );
    });
    
    return (
        <div>
            <h4>MainView2</h4>
        <Grid container >
             {textComponents}
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

export default MainView2;
/////////////////////////////////////////
// MainView2.jsx
// selector test
//

import React from 'react';
import Grid from '@material-ui/core/Grid';

import TextFieldContainer from '../containers/TextFieldContainer';
import TextFieldContainerSimple from '../containers/TextFieldContainerSimple';
import Button from '@material-ui/core/Button';




const MainView2 = (props) => {

    const {
      fieldIds,
      createField
    } = props;

    const onCreateField = () => {

      console.log("onCreate field called");
      //Creates a new field in the store
      // for now, just use the length and add one. 
      // Very simple.
      createField(fieldIds.length + 1, "New Field", "Some initial value");
    
    }

    // this one writes directly to the store 
    // in iuts own field.
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
          <Grid item xs={12} >
             {textComponents}
          </Grid>
          <Grid item xs={12} >
            <TextFieldContainerSimple 
                fieldId="FieldOne"
                fieldName={"FieldOne"}
                fieldProps={fieldProps2}
                enabled={false}
                />
          </Grid>
          <Grid item xs={12} >
            <Button onClick={onCreateField}>Create Field</Button>
          </Grid>
			</Grid>
        </div>
    );
}

export default MainView2;
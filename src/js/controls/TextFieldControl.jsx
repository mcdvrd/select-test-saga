////////////////////////////////////////
// controls/TextFieldControl.jsx
// 
import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


// import classNames from 'classnames';

const styles = theme => ({
    root: {
      display: 'flex',
      // flexGrow: 1,
    },
    dense: {
      marginTop: 19,
    },
    textField: {
      marginLeft: theme.spacing(12),
      marginRight: theme.spacing(12),
    },
  });
  
const TextFieldControl = (props) => {
    
    const {
   
       value,
      fieldId,
        fieldProps,
        fieldName,
        classes,
        enabled,
        updateField,
        updateFieldOne
    } = props;

    console.log("TextFieldControl Value: "  + JSON.stringify(value));
    console.log("TextFieldControl fieldId: " + fieldId);

    function handleChange(event, fieldId) {

        (fieldName === "FieldOne") ? updateFieldOne(fieldId, event.target.value) : updateField(fieldId, event.target.value);
    }

    // create unique-key for sections
    const sid = "section" + fieldName;

    switch(fieldProps.type) {
                  
        default:
            return (
               
                <div >
                    <TextField key={fieldName} 
                    id={sid}
                    disabled={enabled}
                    label={fieldProps.name}
                    placeholder={fieldProps.name}
                    defaultValue={value}
                    className={classes.textField}
                    style={{float: 'left'}}
                    margin="normal"
                    onChange={(e) => {handleChange(e, fieldId)}}
                    />
                </div>
            );
    }
}

export default withStyles(styles)(TextFieldControl);
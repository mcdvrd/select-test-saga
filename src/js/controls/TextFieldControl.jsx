////////////////////////////////////////
// controls/TextFieldControl.jsx
// 
import React from 'react';
import PropTypes from 'prop-types';

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
        disabled,
        updateField,
        updateFieldOne
    } = props;

  //  console.log("TextFieldControl Value: "  + JSON.stringify(value));
  //  console.log("TextFieldControl fieldId: " + fieldId);

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
                    disabled={disabled}
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

TextFieldControl.propTypes = {
  value: PropTypes.string,
  fieldId: PropTypes.number.isRequired,
  fieldProps: PropTypes.object.isRequired,
  disabled: PropTypes.bool.isRequired,
  updateField: PropTypes.func,
  updateFieldOne: PropTypes.func
};

export default withStyles(styles)(TextFieldControl);
/////////////////////////////////////////
// MainView2.jsx
// selector test
//

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import TextFieldContainer from '../containers/TextFieldContainer';
import TextFieldContainerSimple from '../containers/TextFieldContainerSimple';
import Button from '@material-ui/core/Button';
import StyledButton from './StyledButton';

/*
const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);
*/

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none',
  },
}));

const MainView = (props) => {

  const classes = useStyles();

    const {
      fieldIds,
      createField
    } = props;

    const onCreateField = () => {

      console.log("onCreate field called");
      //Creates a new field in the store
      // for now, just use the length and add one. 
      // ...Very simple.
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
            disabled={false}
            />
        </Grid>
      );
    });
    
    return (
        <div>
            <h2>select-test1</h2>
            <h4>Main View</h4>
        <Grid container >
          <Grid item xs={12} >
             {textComponents}
          </Grid>
          <Grid item xs={12} >
            <TextFieldContainerSimple 
                fieldId={1}
                fieldName={"FieldOne"}
                fieldProps={fieldProps2}
                disabled={false}
                />
          </Grid>
          <div style={{padding: '25px'}}></div>
          <Grid item xs={12} >
            <Button 
                color='primary' 
                className={classes.button} 
                onClick={onCreateField} 
                variant="contained">Create Field</Button>
          </Grid>
          <div style={{padding: '25px'}}></div>
          <Grid item xs={12} >
            <StyledButton 
                onClick={onCreateField} 
                variant="contained">StylizedCreate Field</StyledButton>
          </Grid>
          <div style={{padding: '25px'}}></div>
          <Grid item xs={12} >
            <button className="button -inverted"
            color="primary"
                onClick={onCreateField} 
                >KP-Button Create Field</button>
          </Grid>
			</Grid>
        </div>
    );
}

MainView.propTypes = {
    fieldIds: PropTypes.array.isRequired,
    createField: PropTypes.func.isRequired
};

export default MainView;
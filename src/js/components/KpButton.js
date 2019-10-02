import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const KpButton = withStyles({
  root: {
    background: '#0078B3',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(99, 105, 135, .3)',
    '&:hover': {
      background: "#0078B3",
    }
  },
  label: {
   textTransform: 'capitalize'
    },
})(Button);

export default KpButton;
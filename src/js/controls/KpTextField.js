import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const KpTextField = withStyles({
 root: {
    background: 'yellow',
 }
})(TextField);

export default KpTextField;
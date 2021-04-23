import { makeStyles} from '@material-ui/core/styles'
import {red} from "@material-ui/core/colors";
export default makeStyles((theme) => (
    {
        h1: {
            color: red,
        },


        form: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
        },

        submitButton: {
            color: 'red'
        }


    }
));

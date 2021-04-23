import React from 'react';
import Register from './components/Register/Register'
import { Container, AppBar, Typography, Grow, Grid} from "@material-ui/core";
export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return <div>
            <Grid item xs={12} sm={4}>
                <Register/>
            </Grid>

        </div>;
    }
}

import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";

import {
    AppBar,
    CssBaseline,
    Typography,
    createMuiTheme,
    Grid,
    Card,
    Paper,
    CardContent
  } from "@material-ui/core";
const ip = 'http://35.221.210.141/'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 300,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const theme = createMuiTheme({
    palette: {
      type: "dark"
    }
  });
// const App = () =>{
//    
    
//     
// }
// export default App;
class app extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
      const classes = useStyles();
        return (
            <ThemeProvider theme={theme}>
                <div className={classes.root}>
                    <Paper className={classes.paper}>
                    <CssBaseline />
                        <Card className={classes.root} variant="outlined">
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    table List
                                </Typography>
                            </CardContent>
                        </Card>
                    </Paper>
                </div>
            </ThemeProvider>
        );
    }
  }
  
  export default app;



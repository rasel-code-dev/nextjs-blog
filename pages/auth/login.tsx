

import classes from './loginStyle.module.scss';
import React from 'react';
import { Button, Box, Grid,
  TextField, Input, FormControl, 
  makeStyles, Theme, createStyles 
} from '@material-ui/core';

import { connect } from "react-redux"

import { login } from "../../store/actions"

const useStyles = makeStyles((theme: Theme)=>
  createStyles({
    form_wrapper:{
      padding: "20px"
    },
    form: {
      display: "flex",
      flexDirection: "column"
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    btn:{
      marginTop: "10px"
    }
  })

)


const loginPage = (props) => {

  const [data, setData] = React.useState({})

  function handlerChange(e){
    setData({...data, [e.target.name]: e.target.value })
  }


  function handleLogin(e){
    e.preventDefault() 
    props.login(data)  
  }


  const classes = useStyles();


  return (
    <div>
      <h1 className={classes.title}>Login Here</h1>    
      
      <Grid className={classes.form_wrapper} container justify="center"  >
        <Grid item xs={12} sm={8} lg={6}>
        <form  onSubmit={handleLogin} >
          <Box className={classes.form}>
            <TextField onChange={handlerChange} name="email" id="email" label="User Email" />
            <TextField onChange={handlerChange} name="password" id="password" label="User Password" />
          </Box>

          <Button className={classes.btn} type="submit" size="small" variant="contained" color="primary">Login</Button>

        </form>   
        </Grid>
      </Grid>

     
    </div>
  );
}

export default connect(null, { login })(loginPage);





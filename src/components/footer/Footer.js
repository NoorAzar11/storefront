'use strict';

import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';



const useStyle = makeStyles(theme => ({
  appBar : {
    top : 'auto',
    bottom : 0,
    height :'50px',
  },
}));






export default function Footer(props) {

  const style = useStyle();

  return (

    <AppBar position='fixed' style={{backgroundColor :' #5c85d6'}} className={style.appBar}>
    <Toolbar>

      <h3 style ={{color:'black' , marginLeft:'40rem',fontFamily:'cursive'}}>&copy; 2021   Our Store at your service  </h3>

    </Toolbar>

  </AppBar>
  )
}

































































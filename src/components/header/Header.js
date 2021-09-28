'use strict';

import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';

import Toolbar from '@material-ui/core/Toolbar';
import Button  from '@material-ui/core/Button';





const useStyle = makeStyles(theme => ({

  space : {

    justifyContent : 'space-between',
  },

}));

export default function Header() {

  const style = useStyle();

  return (

    <AppBar position='static' style={{backgroundColor :' #5c85d6' }}>

      <Toolbar className={style.space}>

        <Button style ={{fontSize:'2rem',fontFamily:'cursive'}} > OUR STORE  <br></br> </Button>
       


      </Toolbar>


    </AppBar>
  )
}































































